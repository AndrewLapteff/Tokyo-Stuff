import React from 'react';
import Cart from '../UI/Cart';
import About from './About';
import style from './Main.module.css';

let state = [
  {
    image:
      'https://x100-venus-sm-ua.gumlet.io/SKU/SUSHI-MASTER/%D0%A1%D0%B5%D1%82%D0%B8/23206F91-3101-11ED-8371-B11A020B59BC-1969%D1%851100_0005_%D0%A1%D0%B5%D1%82-%D0%91%D1%96%D0%BD%D0%B3%D0%BE.png?alt=media&token=6a4b6b9c-c74e-45a1-85b4-96608e0c142e&w=800&format=webp&mode=fit&q=59',
    grams: '760 г',
    name: 'Сет Токіо',
    description:
      'Філадельфія з лососем, кранч із креветкою, фелікс рол з лососем.',
    price: '699 ₴',
    id: 1,
  },
  {
    image:
      'https://x100-venus-sm-ua.gumlet.io/SKU/SUSHI-MASTER/%D0%A1%D0%B5%D1%82%D0%B8/995C40A1-3109-11ED-ACA4-2DE1140535B7-1969%D1%851100_0007_%D0%A1%D0%B5%D1%82-%D0%A1%D0%BF%D0%BE%D0%BA%D1%83%D1%81%D0%B0.png?alt=media&token=ddff22d2-f229-4b50-9383-2e51c663d3e5&w=800&format=webp&mode=fit&q=59',
    grams: '740 г',
    name: 'Сет Кіото',
    description:
      'Філадельфія з лососем, каліфорнія з вуграм у кунжуті, кранч з креветкою.',
    price: '670 ₴',
    id: 2,
  },
  {
    image:
      'https://x100-venus-sm-ua.gumlet.io/SKU/SUSHI-MASTER/%D0%A1%D0%B5%D1%82%D0%B8/055F09C1-3107-11ED-B49D-176D6E48CD1B-1969%D1%851100_0006_%D0%A1%D0%B5%D1%82-%D0%BD%D0%B0-%D0%BF%D0%BB%D1%8F%D0%B6%D1%96-new.png?alt=media&token=615a4a35-f30b-4192-bcef-e0ea80483fd8&w=800&format=webp&mode=fit&q=59',
    grams: '780 г',
    name: 'Сет Осака',
    description:
      'Ніжний лосось, запечений із креветкою, запечений із крабовим міксом.',
    price: '710 ₴',
    id: 3,
  },
  {
    image:
      'https://x100-venus-sm-ua.gumlet.io/SKU/SUSHI-MASTER/%D0%A1%D0%B5%D1%82%D0%B8/0188C5E1-9C9E-11ED-8A53-A79068836E9C-1969%D1%851100_0002_%D0%A1%D0%B5%D1%82-%D0%9D%D0%B5%D0%B7%D0%BB%D0%B0%D0%BC%D0%BD%D0%B8%D0%B9.png?alt=media&token=afa39946-ff6d-4d10-a247-8da4b7b0a713&w=800&format=webp&mode=fit&q=59',
    grams: '850 г',
    name: 'Сет Гурман',
    description:
      'Філадельфія з лососем, кранч з креветкою, каліфорнія з копченим лососем у кунжуті.',
    price: '850 ₴',
    id: 4,
  },
  {
    image:
      'https://x100-venus-sm-ua.gumlet.io/SKU/SUSHI-MASTER/%D0%97%D0%B0%D0%BA%D1%83%D1%81%D0%BA%D0%B8/BDE18D21-F462-11EB-B5E6-4DF13429A9CF-%D0%A0%D0%B8%D1%81%D0%BE%D0%B2%D1%96%20%D1%87%D1%96%D0%BF%D1%81%D0%B8.png?alt=media&token=7b601455-2050-441d-a848-b3037d0dbd9a&w=800&format=webp&mode=fit&q=59',
    grams: '50 г',
    name: 'Рисові чіпси',
    description: 'Рисові чіпси',
    price: '60 ₴',
    id: 5,
  },
];

function Main() {
  const sets = state.map((item) => {
    return (
      <Cart
        image={item.image}
        name={item.name}
        grams={item.grams}
        description={item.description}
        price={item.price}
        key={item.id}
      />
    );
  });

  return (
    <main className={style.main_wrapper}>
      <About />
      <div className={style.carts_wrapper}>{sets}</div>
    </main>
  );
}

export default Main;