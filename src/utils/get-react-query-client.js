import { QueryClient } from "react-query";

/**
 * @type {{client: QueryClient}} ReactQueryClient
 */
const ReactQueryClient = {
	client: new QueryClient(),
};

/**
 * @returns  {QueryClient}
 */
export const getReactQueryClient = () => ReactQueryClient.client;
