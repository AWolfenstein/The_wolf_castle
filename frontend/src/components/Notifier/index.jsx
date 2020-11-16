import { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { useSnackbar } from 'notistack';
import { removeSnackbar } from '../../store/modules/context/actions';
import { selectNotifications } from '../../store/modules/context/selectors';

const Notifier = ({ notifications, removeSnackbar }) => {
  const { enqueueSnackbar, closeSnackbar } = useSnackbar();
  const [displayed, setDiSplayed] = useState([]);

  const storeDisplayed = (id) => {
    setDiSplayed([...displayed, id]);
  };

  const removeDisplayed = (id) => {
    setDiSplayed([...displayed.filter((key) => id !== key)]);
  };

  useEffect(() => {
    notifications.forEach(
      ({ key, message, options = {}, dismissed = false }) => {
        if (dismissed) {
          closeSnackbar(key);
          return;
        }

        if (displayed.includes(key)) return;

        enqueueSnackbar(message, {
          key,
          ...options,
          onClose: (event, reason, myKey) => {
            if (options.onClose) {
              options.onClose(event, reason, myKey);
            }
          },
          onExited: (event, myKey) => {
            removeSnackbar(myKey);
            removeDisplayed(myKey);
          },
        });

        storeDisplayed(key);
      }
    );
  }, [notifications, closeSnackbar, enqueueSnackbar]);

  return null;
};

const mapStateToProps = (state) => {
  return {
    notifications: selectNotifications(state),
  };
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(
    {
      removeSnackbar,
    },
    dispatch
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(Notifier);
