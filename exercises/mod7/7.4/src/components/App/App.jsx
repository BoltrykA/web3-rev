/* eslint-disable no-unused-vars */
/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/prop-types */
import { useState } from 'react'

import {
  Routes,
  Route,
  Link,
  useNavigate,
  useMatch,
  useParams
} from "react-router-dom"

import { Button, Input, Form, Radio } from 'antd';
import { UserOutlined, InfoCircleOutlined, DownSquareOutlined } from '@ant-design/icons';

const Menu = () => {
  const padding = {
    paddingRight: 5
  }
  return (
    <div>
      <Link to="/" style={padding}>anecdotes</Link>
      <Link to="/create" style={padding}>create new</Link>
      <Link to="/about" style={padding}>about</Link>
    </div>
  )
}

const AnecdoteList = ({ anecdotes }) => (
  <div>
    <h2>Anecdotes</h2>
    <ul>
      {anecdotes.map(anecdote => (
        <li key={anecdote.id}>
          <Link to={`/anecdotes/${anecdote.id}`}>{anecdote.content}</Link>
        </li>
      ))}
    </ul>
  </div>
)

const About = () => (
  <div>
    <h2>About anecdote app</h2>
    <p>According to Wikipedia:</p>

    <em>An anecdote is a brief, revealing account of an individual person or an incident.
      Occasionally humorous, anecdotes differ from jokes because their primary purpose is not simply to provoke laughter but to reveal a truth more general than the brief tale itself,
      such as to characterize a person by delineating a specific quirk or trait, to communicate an abstract idea about a person, place, or thing through the concrete details of a short narrative.
      An anecdote is "a story with a point."</em>

    <p>Software engineering is full of excellent anecdotes, at this app you can find the best and add more.</p>
  </div>
)

const Footer = () => (
  <div>
    Anecdote app for <a href='https://fullstackopen.com/'>Full Stack Open</a>.

    See <a href='https://github.com/fullstack-hy2020/routed-anecdotes/blob/master/src/App.js'>https://github.com/fullstack-hy2020/routed-anecdotes/blob/master/src/App.js</a> for the source code.
  </div>
)

const CreateNew = (props) => {
  const navigate = useNavigate();
  const [form] = Form.useForm();

  const handleSubmit = async (values) => {
    try {
      const submittedValues = await form.validateFields();
      props.addNew({
        content: submittedValues.content,
        author: submittedValues.author,
        info: submittedValues.info,
        votes: 0
      });
      props.setNotification(`a new anecdote ${submittedValues.content} created!`);
      navigate('/');

      // Reset notification after 5 seconds
      setTimeout(() => {
        props.setNotification('');
      }, 5000);
    } catch (error) {
      console.error('Validation failed:', error);
    }
  };

  const layout = {
    labelCol: { span: 4 },
    wrapperCol: { span: 14 },
  };

  return (
    <Form
      form={form}
      onFinish={handleSubmit}
      style={{ maxWidth: 600 }}
      {...layout}
    >
      <Form.Item
        
        name="content"
        rules={[{ required: true, message: 'Please enter the content' }]}
      >
        <Input placeholder="Enter the content" prefix={<UserOutlined />} />
      </Form.Item>
      <Form.Item
        
        name="author"
        rules={[{ required: true, message: 'Please enter the author' }]}
      >
        <Input placeholder="Enter your author" prefix={<UserOutlined />} />
      </Form.Item>
      <Form.Item
        
        name="info"
        rules={[{ required: true, message: 'Please enter the URL for more info' }]}
      >
        <Input placeholder="Enter URL" prefix={<InfoCircleOutlined />} />
      </Form.Item>

      <Form.Item wrapperCol={{ span: 14 }}>
        <Button type="primary" htmlType="submit" size="large" icon={<DownSquareOutlined />}>
          Create
        </Button>
      </Form.Item>
    </Form>
  );
};


const Anecdote = ({ anecdotes }) => {
  const { id } = useParams();
  const anecdote = anecdotes.find(a => a.id === Number(id));

  if (!anecdote) {
    return <div>Anecdote not found</div>;
  }

  return (
    <div>
      <h2>{anecdote.content}</h2>
      <div>has {anecdote.votes} votes</div>
      <br />
      <div>URL for more info: {anecdote.info}</div> {/* Displaying URL as plain text */}
      <br />
    </div>
  );
};

// Notification component
const Notification = ({ notification }) => {
  const redTextStyle = {
    color: 'red'
  };

  return (
    <div>
      <h2>
        {notification && <p style={redTextStyle}>{notification}</p>}
      </h2>
    </div>
  );
};

const App = () => {
  const [anecdotes, setAnecdotes] = useState([
    {
      content: 'If it hurts, do it more often',
      author: 'Jez Humble',
      info: 'https://martinfowler.com/bliki/FrequencyReducesDifficulty.html',
      votes: 0,
      id: 1
    },
    {
      content: 'Premature optimization is the root of all evil',
      author: 'Donald Knuth',
      info: 'http://wiki.c2.com/?PrematureOptimization',
      votes: 0,
      id: 2
    }
  ])

  const [notification, setNotification] = useState('')

  const addNew = (anecdote) => {
    anecdote.id = Math.round(Math.random() * 10000)
    setAnecdotes(anecdotes.concat(anecdote))
    
  }

  const anecdoteById = (id) =>
    anecdotes.find(a => a.id === id)

  const vote = (id) => {
    const anecdote = anecdoteById(id)

    const voted = {
      ...anecdote,
      votes: anecdote.votes + 1
    }

    setAnecdotes(anecdotes.map(a => a.id === id ? voted : a))
  }

  return (
    <div>
      <h1>Software anecdotes</h1>
      <Menu />
      <Notification notification={notification} />
      <Routes>
        <Route path="/" element={<AnecdoteList anecdotes={anecdotes} />} />
        <Route path="/anecdotes/:id" element={<Anecdote anecdotes={anecdotes} />} /> {/* Pass anecdotes as prop */}
        <Route path="/create" element={<CreateNew addNew={addNew} setNotification={setNotification} />} />
        <Route path="/about" element={<About />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App
