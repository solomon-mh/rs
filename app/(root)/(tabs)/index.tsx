import { Link } from "expo-router";
import { Text, View } from "react-native";

export default function Index() {
	return (
		<View
			style={{
				flex: 1,
				justifyContent: "center",
				alignItems: "center",
			}}
		>
			<Text className="text-4xl font-rubik-light font-bold text-red-600 shadow-red-600">
				Welcome to Hell!
			</Text>
			<Link href="/sign-in"> Sign In</Link>
			<Link href="/(root)/(tabs)/explore">Explore</Link>
			<Link href="/(root)/(tabs)/profile">Profile</Link>
			<Link href="/properties/[id]">Property</Link>
		</View>
	);
}
