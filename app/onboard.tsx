import { OnboardFlow } from "react-native-onboard";

const Onboard = () => {
  return (
    <OnboardFlow
      pages={[
        {
          title: "Welcome to my app",
          subtitle: "This is page 1",
          imageUri: "https://frigade.com/img/example1.png",
        },
        {
          title: "Page 2 header",
          subtitle: "This is page 2",
          imageUri: "https://frigade.com/img/example2.png",
        },
      ]}
    />
  );
};

export default Onboard;
