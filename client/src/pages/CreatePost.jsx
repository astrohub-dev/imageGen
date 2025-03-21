import React, { useState } from 'react';
import styled from 'styled-components';
import GenerateImageForm from '../components/GenerateImageForm';
import GeneratedImageCard from '../components/GeneratedImageCard';

const Container = styled.div`
  height: 100%;
  background: ${({ theme }) => theme.bg};
  padding: 20px 30px;
  padding-bottom: 50px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 20px;
  @media (max-width: 768) {
    padding: 6px 10px;
  }
  background: ${({theme}) => theme.background};
`;

const Wrapper = styled.div`
  width: 100%;
  height: fit-content;
  max-width: 1200px;
  gap: 8%;
  display: flex;
  justify-content: center;
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const CreatePost = () => {

  const [generateImageLoading, setGenerateImageLoading] = useState(false);

  const [createPostLoading, setCreatePostLoading] = useState(false);

  const [post, setPost] = useState({
    name: "",
    prompt: "",
    photo: ""
  });

  return (
    <Container>
      <Wrapper>
        <GenerateImageForm post={post} setPost={setPost} createPostLoading={createPostLoading} generateImageLoading={generateImageLoading} setGenerateImageLoading={setGenerateImageLoading} setCreatePostLoading={setCreatePostLoading} />
        <GeneratedImageCard src={post?.photo} loading={generateImageLoading} />
      </Wrapper>
    </Container>
  )
}

export default CreatePost;