import styled from "styled-components";

const Container = styled.div``;

const BlogName = styled.div`
  font-size: 24px;
  color: white;
  font-weight: bold;
  margin-bottom: 15px;
`;

const Contents = styled.div`
  border: 0.3px solid white;
  padding: 10px;
`;

interface Data {
  id: number;
  title: string;
}

interface IProps {
  loading: boolean;
  response: Array<Data>;
}

export default function Posts({ loading, response }: IProps) {
  return (
    <Container>
      <BlogName>My Blog</BlogName>
      {loading ? (
        <h1>Loading...</h1>
      ) : (
        <div>
          {response.map((v) => (
            <Contents key={v.id}>{v.title}</Contents>
          ))}
        </div>
      )}
    </Container>
  );
}
