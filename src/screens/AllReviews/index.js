import {ScrollView, Text} from 'react-native';
import {style} from './style';
import Review from '../../commonComponent/Review';

export default function AllReviews({route}) {
  return (
    <ScrollView style={style.container}>
      {route.params.reviews.map(data => (
        <Review
          reviewData={data}
          key={`${data.name} ${Math.random() * 10300300}`}
        />
      ))}
    </ScrollView>
  );
}
