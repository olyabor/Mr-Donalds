const functions = require('firebase-functions');
const nodemailer = require('nodemailer');
const htmlToText = require('nodemailer-html-to-text');
const { email, password } = require('./config');

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: email, 
    pass: password,
  }
});

transporter.use('compile', htmlToText());

const sendOrderEmail = order => {
  const options = {
    from: `MRDoanlds`,
    to: order.email,
    subject: `Ваш заказ из MRDonald's`,
    html: `<div>
              <h2>Добрый день, ${order.nameClient}</h2>
              <h3>Ваш заказ:</h3>
              <ul>
                ${order.map(({ itemName, count, price }) => (
                  `<li>${item.name} - ${count}шт., цена ${price * count} руб.</li>`
                ))}
              </ul>
              <p>Итого: ${order.reduce((sum, item) =>
                sum + (item.price + item.count), 0)} руб.</p>
              <small>Ожидайте курьера.</small>
          </div>`,
  };
  transporter.sendMail(options);
}

exports.sendUserEmail = functions.database.ref('orders/{pushID}')
    .onCreate(order => console.log(order.val()));

