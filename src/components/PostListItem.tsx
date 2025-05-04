import { View, Text, Image, TouchableOpacity } from 'react-native';
import { Post } from '@/types';
import { Ionicons } from '@expo/vector-icons';
import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';

dayjs.extend(relativeTime);

export default function PostListItem({ post }: { post: Post }) {
  return (
    <View className="flex-row p-4 border-b border-gray-800/70">
      {/* User Avatar */}
      <View className="mr-3">
        <Image
          source={{ uri: post.user.image }}
          className="w-12 h-12 rounded-full"
        />
      </View>

      {/* Post Content */}
      <View className="flex-1">
        {/* User Info */}
        <View className="flex-row items-center mb-1">
          <Text className="text-white font-bold mr-2">{post.user.username}</Text>
          <Text className="text-gray-500">
            {dayjs(post.createdAt).fromNow()}
          </Text>
        </View>

        {/* Post Text */}
        <Text className="text-white text-base mb-2">{post.content}</Text>

        {/* Interaction Buttons */}
        <View className="flex-row gap-4 mt-2">
          <TouchableOpacity className="flex-row items-center">
            <Ionicons name="chatbubble-outline" size={20} color="#d1d5db" />
            <Text className="text-gray-300 ml-2">{post.replies.length}</Text>
          </TouchableOpacity>

          <TouchableOpacity className="flex-row items-center">
            <Ionicons name="repeat-outline" size={20} color="#d1d5db" />
            <Text className="text-gray-300 ml-2">0</Text>
          </TouchableOpacity>

          <TouchableOpacity className="flex-row items-center">
            <Ionicons name="heart-outline" size={20} color="#d1d5db" />
            <Text className="text-gray-300 ml-2">0</Text>
          </TouchableOpacity>

          <TouchableOpacity className="flex-row items-center">
            <Ionicons name="paper-plane-outline" size={20} color="#d1d5db" />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}