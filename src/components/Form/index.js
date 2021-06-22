/**
 * components/Form/index.js
 */
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useSnackbar } from 'notistack';
import { useForm } from 'react-hook-form';

import { useMutationRequest } from 'hooks/Request';
import useError from 'hooks/Request/Error';
import { useModalAlert } from 'components/Modal/Alert/Hook';

import Base from './Base';

const Form = (props) => {
  const {
    service,
    onError,
    onSuccess,
    successMessage,
    errorMessage,
    successMessageType,
    ...others
  } = props;
  const { showError } = useError();
  const [loading, setLoading] = useState(false);
  const [formError, setFormError] = useState(null);
  const { enqueueSnackbar } = useSnackbar();
  const { showModalAlert } = useModalAlert();

  const formHook = useForm();
  const { reset } = formHook;

  // Error handler
  const errorHandler = (error) => {
    const { response } = error;
    if (response.status === 400) {
      const msg = errorMessage || response.data.error;
      setFormError(msg);
    } else {
      showError(error);
    }

    if (onError) {
      onError();
    }
  };

  // Success handler
  const successHandler = (data) => {
    if (successMessageType === 'snackbar') {
      enqueueSnackbar(successMessage, {
        variant: 'success',
      });
    } else if (successMessageType === 'dialog') {
      showModalAlert(successMessage, '', 'success');
    }
    reset();

    if (onSuccess) {
      onSuccess(data);
    }
  };

  // onSubmit
  const mutation = useMutationRequest(service, {
    onError: errorHandler,
    onSuccess: successHandler,
    onSettled: () => {
      setLoading(false);
    },
  });
  const onSubmit = (data) => {
    setLoading(true);
    mutation.mutate(data);
  };

  return (
    <Base
      formHook={formHook}
      onSubmit={onSubmit}
      loading={loading}
      error={formError}
      {...others}
    />
  );
};

Form.defaultProps = {
  successMessageType: 'snackbar',
};

Form.propTypes = {
  service: PropTypes.func.isRequired,
  onError: PropTypes.func,
  onSuccess: PropTypes.func,
  errorMessage: PropTypes.string,
  successMessage: PropTypes.string.isRequired,
  successMessageType: PropTypes.oneOf(['none', 'dialog', 'snackbar']),
};

export default Form;
