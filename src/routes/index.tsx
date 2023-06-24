import { NavigationContainer } from "@react-navigation/native";
import { AppRoutes } from "./app.routes";
import UserContextProvider from "@/contexts/User";

export default function Routes() {
  return (
    <UserContextProvider>
      <NavigationContainer>
        <AppRoutes />
      </NavigationContainer>
    </UserContextProvider>
  );
}
