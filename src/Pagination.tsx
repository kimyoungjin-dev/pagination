import styled from "styled-components";

const Container = styled.div`
  display: flex;
`;

const Box = styled.div`
  margin-top: 10px;
  width: 30px;
  height: 30px;
  border: 1px solid black;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: red;
  color: white;
  border-radius: 3px;
  cursor: pointer;
  :not(:first-child) {
    margin-left: 20px;
  }
`;

interface IProps {
  postPerPage: number;
  totalPosts: number;
  paginateFn: (number: number) => void;
}

export default function Pagination({
  postPerPage,
  totalPosts,
  paginateFn,
}: IProps) {
  const arr = [];
  const paginate = Math.ceil(totalPosts / postPerPage);

  for (let i = 1; i <= paginate; i++) {
    arr.push(i);
  }

  return (
    <Container>
      {arr.map((number) => (
        <Box key={number} onClick={() => paginateFn(number)}>
          <span>{number}</span>
        </Box>
      ))}
    </Container>
  );
}
