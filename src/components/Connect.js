import React, { useState } from 'react';
import './Connect.scss';

export default function Connect() {
  const [contactMethod, setContactMethod] = useState('Telegram');
  const [name, setName] = useState('');
  const [contactValue, setContactValue] = useState('');
  const [comment, setComment] = useState('');
  const [errors, setErrors] = useState({});

  function validate() {
    const newErrors = {};

    if (!name.trim()) {
      newErrors.name = 'Имя обязательно';
    }

    if (!contactValue.trim()) {
      newErrors.contactValue = 'Это поле обязательно';
    } else {
      if (contactMethod === 'Email') {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(contactValue)) {
          newErrors.contactValue = 'Неверный формат email';
        }
      } else if (contactMethod === 'Phone') {
        const phoneRegex = /^\+?\d{7,}$/;
        if (!phoneRegex.test(contactValue)) {
          newErrors.contactValue = 'Неверный формат телефона';
        }
      } else if (contactMethod === 'Telegram') {
        if (contactValue.includes(' ') || contactValue.length < 3) {
          newErrors.contactValue = 'Некорректный Telegram';
        }
      }
    }

    if (comment && comment.trim().length > 0 && comment.trim().length < 5) {
      newErrors.comment = 'Комментарий должен быть не короче 5 символов';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  }

  function handleSubmit(e) {
    e.preventDefault();

    if (!validate()) {
      return;
    }

    const data = {
      contactMethod,
      name,
      contactValue,
      comment,
    };

    fetch('http://localhost:5001/submit', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })
      .then((response) => {
        if (!response.ok) throw new Error('Ошибка сети');
        return response.json();
      })
      .then(() => {
        alert('Сообщение успешно отправлено!');
        setName('');
        setContactValue('');
        setComment('');
      })
      .catch((error) => {
        console.error(error);
        alert('Произошла ошибка при отправке сообщения. Пожалуйста, повторите попытку позже или свяжитесь с нами по другому каналу связи!');
      });
  }

  return (
    <form id="connect" className="connect" onSubmit={handleSubmit} noValidate>
      <div className="row">
        <label>Имя</label>
        <input
          type="text"
          placeholder="Введите имя"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        {errors.name && <div className="error">{errors.name}</div>}
      </div>

      <div className="row">
        <label>Способ связи</label>
        <select value={contactMethod} onChange={(e) => setContactMethod(e.target.value)}>
          <option value="Telegram">Телеграм</option>
          <option value="Email">Email</option>
          <option value="Phone">Телефон</option>
        </select>
      </div>

      <div className="row">
        <label>
          {contactMethod === 'Telegram' && 'Введите Telegram'}
          {contactMethod === 'Email' && 'Введите Email'}
          {contactMethod === 'Phone' && 'Введите номер'}
        </label>
        <input
          type="text"
          placeholder={
            contactMethod === 'Telegram'
              ? 'Введите Telegram'
              : contactMethod === 'Email'
              ? 'Введите Email'
              : 'Введите номер'
          }
          value={contactValue}
          onChange={(e) => setContactValue(e.target.value)}
        />
        {errors.contactValue && <div className="error">{errors.contactValue}</div>}
      </div>

      <div className="row">
        <label>Сообщение</label>
        <textarea
          placeholder="Введите сообщение"
          value={comment}
          onChange={(e) => setComment(e.target.value)}
        />
        {errors.comment && <div className="error">{errors.comment}</div>}
      </div>

      <button type="submit" className="submitBtn">
        Отправить сообщение
      </button>
    </form>
  );
}
