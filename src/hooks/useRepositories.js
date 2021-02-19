import { useQuery } from "@apollo/react-hooks";
import { GET_REPOSITORIES } from "../graphql/queries";

const useRepositories = () => {

  const { data, loading, error } = useQuery(GET_REPOSITORIES, {
    fetchPolicy: "cache-and-network",
  });

  return { repositories: data ? data.repositories : error, loading };
};

export default useRepositories;
