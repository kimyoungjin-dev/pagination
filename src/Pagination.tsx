import { useState } from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
`;

const Box = styled.div<{ current: boolean }>`
  margin-top: 10px;
  width: 30px;
  height: 30px;
  border: 1px solid black;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: white;
  transition: 0.4s ease-in-out;
  color: ${(props) => (props.current ? "red" : "black")};
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
  const [selected, setSelected] = useState(0);

  for (let i = 1; i <= paginate; i++) {
    arr.push(i);
  }

  const handleColor = (value: number) => {
    setSelected(value);
  };

  return (
    <Container>
      {arr.map((number) => {
        return (
          <Box
            current={number === selected}
            key={number}
            onClick={() => {
              paginateFn(number);
              handleColor(number);
            }}
          >
            <span>{number}</span>
          </Box>
        );
      })}
    </Container>
  );
}
