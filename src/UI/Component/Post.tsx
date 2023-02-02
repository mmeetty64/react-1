import React, { useContext, useEffect, FC, useState } from 'react'
import { Context } from '../../Context/ContextWrapper'
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export const Post = () => {

    const {getPost, post} = useContext(Context);
    

    useEffect(() => {
      fetch("https://jsonplaceholder.typicode.com/posts?_limit=12").then(response => response.json()).then(posts => getPost(posts))
    }, [])
    
  return (
    <div>
        <Container>
            <Row style={{width: "70rem", margin: "0 auto"}}>
                {post.map((el) => (
                    <Col>
                        <div key = {el.id}>
                            <Card style={{ width: '18rem', marginBottom: "2rem" }}>
                            <Card.Body>
                                <Card.Title>{el.title}</Card.Title>
                                <Card.Subtitle className="mb-2 text-muted">Автор: {el.userId}</Card.Subtitle>
                                <Card.Text>
                                    {el.body}
                                </Card.Text>
                            </Card.Body>
                            </Card>
                        </div>
                    </Col>
                ))}
            </Row>
        </Container>
    </div>
  )
}

