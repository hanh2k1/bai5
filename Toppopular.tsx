import * as React from 'react';
import {View, Text, StyleSheet, SafeAreaView} from 'react-native';
import {ScrollView} from 'react-native';

type Result = {
  id: number;
  original_language: string;
  popularity: number;
  release_date: string;
  title: string;
};
interface Post {
  page: number;
  results?: Result[];
}

export function NetworkDemo() {
  const [data, setData] = React.useState<Post | undefined>();

  const getMoviesFromApi = () => {
    return fetch('https://api.themoviedb.org/3/movie/popular?api_key=9efbd8cf655d649cbf935c88e6bc2d4c')
      .then(response => response.json())
      .then(json => {
        console.log(json);
        return json as Post;
      })
      .catch(error => {
        console.error(error);
        return undefined;
      });
  };

  React.useEffect(() => {
    getMoviesFromApi().then(response => setData(response));
  }, []);

  return (
    <View style={styles.container}>
      {data === undefined ? (
        <Text>Loading ...</Text>
      ) : (
        <MovieComponent post={data} />
      )}
    </View>
  );
}

export interface Props {
  post: Post;
}

const MovieComponent: React.FC<Props> = props => {
  console.log(props);
  return (
    <ScrollView>
      <SafeAreaView style={{gap:12}}>
      <Text style={{fontSize:20}}>Page: {props.post.page}</Text>
      <Text  style={{fontSize:20}}>Result :</Text>
      {props.post.results?.map(results => (
        <Text style={{fontSize:20}} key={results.id}>
         ID: {results.id}  {"\n"}
         title :{results.title} {"\n"}
         Release_date :{results.release_date} {"\n"}
         Original_language :{results.original_language} {"\n"}
         Popularity :{results.popularity}
        </Text>
      ))}
    </SafeAreaView>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fffff',
    gap:4,
  },
  title: {
    fontWeight: 'bold',
    fontSize: 26,
    color: '#000',
  },
});

export default NetworkDemo;