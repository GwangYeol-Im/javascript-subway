import { encrypt, request } from '../../../@shared/utils';
import { BASE_URL } from '../../constants/constants';

const signUp = async ({ $email, $password, $name }) => {
  const url = `${BASE_URL}/members`;
  const option = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      email: $email.value,
      password: encrypt($password.value),
      name: $name.value,
    }),
  };

  try {
    await request(url, option);
  } catch (error) {
    throw new Error(error.message);
  }
};

const checkOverlappedEmail = async email => {
  const url = `${BASE_URL}/members/check-validation?email=${encodeURIComponent(email)}`;

  try {
    await request(url);
  } catch (error) {
    throw new Error(error.message);
  }
};

export const userJoinAPI = {
  signUp,
  checkOverlappedEmail,
};
