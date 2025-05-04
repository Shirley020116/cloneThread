import { User, Post } from './types';

export const dummyUsers: User[] = [
  {
    id: '1',
    username: 'johndoe',
    name: 'John Doe',
    image: 'https://randomuser.me/api/portraits/men/1.jpg',
    bio: 'Software developer and tech enthusiast'
  },
  {
    id: '2',
    username: 'janedoe',
    name: 'Jane Doe',
    image: 'https://randomuser.me/api/portraits/women/1.jpg',
    bio: 'Digital artist and creative thinker'
  },
  {
    id: '3',
    username: 'alexsmith',
    name: 'Alex Smith',
    image: 'https://randomuser.me/api/portraits/men/2.jpg',
    bio: 'Photographer capturing life\'s moments'
  },
  {
    id: '4',
    username: 'sarahjones',
    name: 'Sarah Jones',
    image: 'https://randomuser.me/api/portraits/women/2.jpg',
    bio: 'Travel blogger and adventure seeker'
  },
  {
    id: '5',
    username: 'mikebrown',
    name: 'Mike Brown',
    image: 'https://randomuser.me/api/portraits/men/3.jpg',
    bio: 'Fitness coach and nutrition expert'
  }
];

export const dummyPosts: Post[] = [
  {
    id: '1',
    createdAt: '2024-03-20T10:00:00Z',
    content: 'Just launched my new project! Check it out and let me know what you think. #coding #webdev',
    user_id: '1',
    user: dummyUsers[0],
    parent_id: null,
    parent: null,
    replies: []
  },
  {
    id: '2',
    createdAt: '2024-03-20T11:30:00Z',
    content: 'Working on some new digital art pieces. The creative process is flowing today! 🎨',
    user_id: '2',
    user: dummyUsers[1],
    parent_id: null,
    parent: null,
    replies: []
  },
  {
    id: '3',
    createdAt: '2024-03-20T12:15:00Z',
    content: 'Beautiful sunset captured today. Nature never fails to amaze me. 🌅',
    user_id: '3',
    user: dummyUsers[2],
    parent_id: null,
    parent: null,
    replies: []
  },
  {
    id: '4',
    createdAt: '2024-03-20T13:45:00Z',
    content: 'Just arrived in Tokyo! The city is absolutely breathtaking. #travel #adventure',
    user_id: '4',
    user: dummyUsers[3],
    parent_id: null,
    parent: null,
    replies: []
  },
  {
    id: '5',
    createdAt: '2024-03-20T14:20:00Z',
    content: 'New workout routine is paying off! Feeling stronger every day. 💪',
    user_id: '5',
    user: dummyUsers[4],
    parent_id: null,
    parent: null,
    replies: []
  },
  {
    id: '6',
    createdAt: '2024-03-20T15:00:00Z',
    content: 'That\'s amazing! What kind of project is it?',
    user_id: '2',
    user: dummyUsers[1],
    parent_id: '1',
    parent: null,
    replies: []
  },
  {
    id: '7',
    createdAt: '2024-03-20T15:30:00Z',
    content: 'It\'s a new social media platform focused on creative content!',
    user_id: '1',
    user: dummyUsers[0],
    parent_id: '6',
    parent: null,
    replies: []
  },
  {
    id: '8',
    createdAt: '2024-03-20T16:00:00Z',
    content: 'Your art is always inspiring! Can\'t wait to see the final pieces.',
    user_id: '3',
    user: dummyUsers[2],
    parent_id: '2',
    parent: null,
    replies: []
  },
  {
    id: '9',
    createdAt: '2024-03-20T16:30:00Z',
    content: 'That sunset is absolutely stunning! Where was this taken?',
    user_id: '4',
    user: dummyUsers[3],
    parent_id: '3',
    parent: null,
    replies: []
  },
  {
    id: '10',
    createdAt: '2024-03-20T17:00:00Z',
    content: 'It was taken at Malibu Beach. The colors were incredible!',
    user_id: '3',
    user: dummyUsers[2],
    parent_id: '9',
    parent: null,
    replies: []
  },
  {
    id: '11',
    createdAt: '2024-03-20T17:30:00Z',
    content: 'Tokyo is on my bucket list! Any recommendations for first-time visitors?',
    user_id: '5',
    user: dummyUsers[4],
    parent_id: '4',
    parent: null,
    replies: []
  },
  {
    id: '12',
    createdAt: '2024-03-20T18:00:00Z',
    content: 'Definitely visit Shibuya Crossing and try authentic ramen!',
    user_id: '4',
    user: dummyUsers[3],
    parent_id: '11',
    parent: null,
    replies: []
  },
  {
    id: '13',
    createdAt: '2024-03-20T18:30:00Z',
    content: 'Your progress is inspiring! What\'s your secret?',
    user_id: '1',
    user: dummyUsers[0],
    parent_id: '5',
    parent: null,
    replies: []
  },
  {
    id: '14',
    createdAt: '2024-03-20T19:00:00Z',
    content: 'Consistency and proper nutrition are key! Also, finding workouts you enjoy helps a lot.',
    user_id: '5',
    user: dummyUsers[4],
    parent_id: '13',
    parent: null,
    replies: []
  },
  {
    id: '15',
    createdAt: '2024-03-20T19:30:00Z',
    content: 'Thanks for the motivation! I\'ll definitely check out your workout routine.',
    user_id: '1',
    user: dummyUsers[0],
    parent_id: '14',
    parent: null,
    replies: []
  }
];
