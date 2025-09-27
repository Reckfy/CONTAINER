"use client";
import React, { useState } from 'react';
import '../../styles/connect.scss';

export default function Connect() {
  const [contactMethod, setContactMethod] = useState('telegram');
  const [name, setName] = useState('');
  const [contactValue, setContactValue] = useState('');
  const [comment, setComment] = useState('');

  return (
    <form className="connect">
      <div className="row">
        <label>Имя</label>
        <input
          type="text"
          placeholder="Введите имя"
          value={name}
          onChange={e => setName(e.target.value)}
        />
      </div>

      <div className="row">
        <label>Способ связи</label>
        <select
          value={contactMethod}
          onChange={e => setContactMethod(e.target.value)}
        >
          <option value="telegram">Телеграм</option>
          <option value="email">Email</option>
          <option value="phone">Телефон</option>
        </select>
      </div>

      <div className="row">
        <label>
          {contactMethod === 'telegram' && 'Введите Telegram'}
          {contactMethod === 'email' && 'Введите Email'}
          {contactMethod === 'phone' && 'Введите номер'}
        </label>
        <input
          type="text"
          placeholder={
            contactMethod === 'telegram'
              ? 'Введите Telegram'
              : contactMethod === 'email'
              ? 'Введите Email'
              : 'Введите номер'
          }
          value={contactValue}
          onChange={e => setContactValue(e.target.value)}
        />
      </div>

      <div className="row">
        <label>Комментарий</label>
        <textarea
          placeholder="Введите сообщение"
          value={comment}
          onChange={e => setComment(e.target.value)}
        />
      </div>

      <button type="submit" className="submitBtn">
        Получить консультацию
      </button>
    </form>
  );
}
