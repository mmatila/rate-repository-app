import { useMutation } from "@apollo/react-hooks";
import { AUTHORIZE } from "../graphql/mutations";

const useSignIn = () => {
  const [mutate, result] = useMutation(AUTHORIZE);

  const signIn = async (credentials) => {
    return mutate({ variables: { credentials } } );
  };

  return [signIn, result];
};

export default useSignIn;
