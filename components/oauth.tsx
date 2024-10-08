import { Image, Text, View } from "react-native";
import { CustomButton } from "./custom-button";
import { icons } from "@/constants/onboarding";

export function OAuth() {
  function handleGoogleSignIn() {
    console.log("handleGoogleSignIn");
  }

  return (
    <View>
      <View className="flex flex-row justify-center items-center mt-4 gap-x-3">
        <View className="flex-1 h-px bg-general-100" />
        <Text className="text-lg">Or</Text>
        <View className="flex-1 h-px bg-general-100" />
      </View>

      <CustomButton
        title="Login with Google"
        className="mt-5 w-full shadow-none"
        IconLeft={() => (
          <Image
            source={icons.google}
            resizeMode="contain"
            className="size-5 mx-2"
          />
        )}
        bgVariant="outline"
        textVariant="primary"
        onPress={handleGoogleSignIn}
      />
    </View>
  );
}
