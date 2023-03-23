import { nanoid } from 'nanoid';
import { create } from 'zustand';
import { devtools } from 'zustand/middleware';

export const useStore = create(
  devtools((set, get) => ({
    state: [
      {
        image:
          'https://x100-venus-sm-ua.gumlet.io/SKU/SUSHI-MASTER/%D0%A1%D0%B5%D1%82%D0%B8/23206F91-3101-11ED-8371-B11A020B59BC-1969%D1%851100_0005_%D0%A1%D0%B5%D1%82-%D0%91%D1%96%D0%BD%D0%B3%D0%BE.png?alt=media&token=6a4b6b9c-c74e-45a1-85b4-96608e0c142e&w=800&format=webp&mode=fit&q=59',
        grams: '760 г',
        name: 'Сет Токіо',
        description:
          'Філадельфія з лососем, кранч із креветкою, фелікс рол з лососем',
        price: '699',
        id: nanoid(),
      },
      {
        image:
          'https://x100-venus-sm-ua.gumlet.io/SKU/SUSHI-MASTER/%D0%A1%D0%B5%D1%82%D0%B8/995C40A1-3109-11ED-ACA4-2DE1140535B7-1969%D1%851100_0007_%D0%A1%D0%B5%D1%82-%D0%A1%D0%BF%D0%BE%D0%BA%D1%83%D1%81%D0%B0.png?alt=media&token=ddff22d2-f229-4b50-9383-2e51c663d3e5&w=800&format=webp&mode=fit&q=59',
        grams: '740 г',
        name: 'Сет Кіото',
        description:
          'Філадельфія з лососем, каліфорнія з вуграм у кунжуті, кранч з креветкою',
        price: '670',
        id: nanoid(),
      },
      {
        image:
          'https://x100-venus-sm-ua.gumlet.io/SKU/SUSHI-MASTER/%D0%A1%D0%B5%D1%82%D0%B8/055F09C1-3107-11ED-B49D-176D6E48CD1B-1969%D1%851100_0006_%D0%A1%D0%B5%D1%82-%D0%BD%D0%B0-%D0%BF%D0%BB%D1%8F%D0%B6%D1%96-new.png?alt=media&token=615a4a35-f30b-4192-bcef-e0ea80483fd8&w=800&format=webp&mode=fit&q=59',
        grams: '780 г',
        name: 'Сет Осака',
        description:
          'Ніжний лосось, запечений із креветкою, запечений із крабовим міксом',
        price: '710',
        id: nanoid(),
      },
      {
        image:
          'https://x100-venus-sm-ua.gumlet.io/SKU/SUSHI-MASTER/%D0%A1%D0%B5%D1%82%D0%B8/0188C5E1-9C9E-11ED-8A53-A79068836E9C-1969%D1%851100_0002_%D0%A1%D0%B5%D1%82-%D0%9D%D0%B5%D0%B7%D0%BB%D0%B0%D0%BC%D0%BD%D0%B8%D0%B9.png?alt=media&token=afa39946-ff6d-4d10-a247-8da4b7b0a713&w=800&format=webp&mode=fit&q=59',
        grams: '850 г',
        name: 'Сет Гурман',
        description:
          'Філадельфія з лососем, кранч з креветкою, каліфорнія з копченим лососем у кунжуті',
        price: '850',
        id: nanoid(),
      },
      {
        image:
          'https://x100-venus-sm-ua.gumlet.io/SKU/SUSHI-MASTER/%D0%A1%D0%B5%D1%82%D0%B8/DA082261-9CA0-11ED-B346-714A6D8F5A26-1969%D1%851100_0005_%D0%A1%D0%B5%D1%82-%D0%91%D0%B0%D0%B3%D0%B0%D1%82%D0%BE-%D1%80%D0%B8%D0%B1%D0%B8.png?alt=media&token=b34f8340-69c6-48bc-9ccb-3104aa10964a&w=800&format=webp&mode=fit&q=60',
        grams: '2090 г',
        name: 'Сет Багато Риби',
        description:
          'Філадельфія з лососем в кунжуті, філадельфія з тунцем, філадельфія з креветкою, філадельфія з тунцем в кунжуті, кранч з креветкою, футомакі з креветкою у темпурі, філадельфія з лососем, футомакі з лососем (гострий). Соєвий соус - 250 мл (5 шт). Імбир - 80 г. Васабі - 40 г.',
        price: '1999',
        id: nanoid(),
      },
      {
        image:
          'https://x100-venus-sm-ua.gumlet.io/SKU/SUSHI-MASTER/%D0%A1%D0%B5%D1%82%D0%B8/0188C5E1-9C9E-11ED-8A53-A79068836E9C-1969%D1%851100_0002_%D0%A1%D0%B5%D1%82-%D0%9D%D0%B5%D0%B7%D0%BB%D0%B0%D0%BC%D0%BD%D0%B8%D0%B9.png?alt=media&token=afa39946-ff6d-4d10-a247-8da4b7b0a713&w=800&format=webp&mode=fit&q=59',
        grams: '230 г',
        name: 'Каліфорнія з лососем в ікрі',
        description: 'Рис, лосось, авокадо, огірок, ікра тобіко, норі',
        price: '279',
        id: nanoid(),
      },
      {
        image:
          'https://x100-venus-sm-ua.gumlet.io/SKU/SUSHI-MASTER/%D0%A1%D0%B5%D1%82%D0%B8/0188C5E1-9C9E-11ED-8A53-A79068836E9C-1969%D1%851100_0002_%D0%A1%D0%B5%D1%82-%D0%9D%D0%B5%D0%B7%D0%BB%D0%B0%D0%BC%D0%BD%D0%B8%D0%B9.png?alt=media&token=afa39946-ff6d-4d10-a247-8da4b7b0a713&w=800&format=webp&mode=fit&q=59',
        grams: '260 г',
        name: 'Каліфорнія з лососем',
        description: 'Рис, лосось, крем сир, авокадо, кунжут, огірок, норі',
        price: '249',
        id: nanoid(),
      },
      {
        image:
          'https://x100-venus-sm-ua.gumlet.io/SKU/SUSHI-MASTER/%D0%A4%D1%96%D0%BB%D0%B0%D0%B4%D0%B5%D0%BB%D1%8C%D1%84%D1%96%D1%8F/1CE280F1-3070-11ED-8371-B11A020B59BC-1969%D1%851100_0002_%D0%A4%D0%B8%D0%BB%D0%B0%D0%B4%D0%B5%D0%BB%D1%8C%D1%84%D0%B8%D1%8F-%D1%81-%D1%83%D0%B3%D1%80%D1%91%D0%BC.png?alt=media&token=42a5aeb4-67fd-4330-a2eb-57833558c64c&w=800&format=webp&mode=fit&q=60',
        grams: '270 г',
        name: 'Філадельфія з вугрем',
        description:
          'Рис, вугор, авокадо, крем сир, огірок, соус унагі, кунжут, норі',
        price: '399',
        id: nanoid(),
      },
      {
        image:
          'https://x100-venus-sm-ua.gumlet.io/SKU/SUSHI-MASTER/%D0%A4%D1%96%D0%BB%D0%B0%D0%B4%D0%B5%D0%BB%D1%8C%D1%84%D1%96%D1%8F/F0A1D050-2FA1-11ED-8371-B11A020B59BC-1969%D1%851100_0004_%D0%A4%D0%B8%D0%BB%D0%B0%D0%B4%D0%B5%D0%BB%D1%8C%D1%84%D0%B8%D1%8F-%D1%81-%D1%82%D1%83%D0%BD%D1%86%D0%BE%D0%BC.png?alt=media&token=192abfea-7f01-4f4b-8698-8cdd35fb08a7&w=800&format=webp&mode=fit&q=60',
        grams: '250 г',
        name: 'Філадельфія з тунцем',
        description: 'Рис, тунець, крем сир, авокадо, огірок, норі',
        price: '299',
        id: nanoid(),
      },
      {
        image:
          'https://x100-venus-sm-ua.gumlet.io/SKU/SUSHI-MASTER/%D0%A4%D1%96%D0%BB%D0%B0%D0%B4%D0%B5%D0%BB%D1%8C%D1%84%D1%96%D1%8F/CA383351-306E-11ED-ACA4-2DE1140535B7-1969%D1%851100_0008_%D0%A4%D0%B8%D0%BB%D0%B0%D0%B4%D0%B5%D0%BB%D1%8C%D1%84%D0%B8%D1%8F-%D1%81-%D0%BA%D1%80%D0%B5%D0%B2%D0%B5%D1%82%D0%BA%D0%BE%D0%B9.png?alt=media&token=97fd0dc9-40db-4e2f-97d8-a72659c1931d&w=800&format=webp&mode=fit&q=60',
        grams: '260 г',
        name: 'Філадельфія з креветкою',
        description:
          'Рис, креветка, огірок, авокадо, крем сир, ікра тобіко, соус чилі гарлик, спеція фурікаке, норі',
        price: '299',
        id: nanoid(),
      },
      {
        image:
          'https://x100-venus-sm-ua.gumlet.io/SKU/SUSHI-MASTER/%D0%A1%D1%83%D0%BF%D0%B8/78187D11-9B16-11ED-B346-714A6D8F5A26-%D0%9C%D1%96%D1%81%D0%BE-%D1%81%D1%83%D0%BF-%D0%B7-%D0%BB%D0%BE%D1%81%D0%BE%D1%81%D0%B5%D0%BC-%D0%BA%D0%B0%D1%80%D1%82%D0%BE%D1%87%D0%BA%D0%B0.png?alt=media&token=e54bca25-a309-4772-8139-ca331ae744e0&w=800&format=webp&mode=fit&q=60',
        grams: '200 г',
        name: 'Суп з лососем (Місо)',
        description: 'Місо бульйон, лосось, вакаме, кунжут, зелена цибуля',
        price: '99',
        id: nanoid(),
      },
      {
        image:
          'https://x100-venus-sm-ua.gumlet.io/SKU/SUSHI-MASTER/%D0%A1%D1%83%D0%BF%D0%B8/B6C11161-9B18-11ED-8A53-A79068836E9C-%D0%9C%D1%96%D1%81%D0%BE-%D1%81%D1%83%D0%BF-%D0%BA%D0%BB%D0%B0%D1%81%D0%B8%D1%87%D0%BD%D0%B8%D0%B9-%D0%BA%D0%B0%D1%80%D1%82%D0%BE%D1%87%D0%BA%D0%B0.png?alt=media&token=1a816557-9ea5-40dd-afae-cb0943d81244&w=800&format=webp&mode=fit&q=60',
        grams: '190 г',
        name: 'Суп класичний (Місо)',
        description: 'Місо бульйон, вакаме, кунжут, зелена цибуля',
        price: '79',
        id: nanoid(),
      },
      {
        image:
          'https://x100-venus-sm-ua.gumlet.io/SKU/SUSHI-MASTER/%D0%97%D0%B0%D0%BA%D1%83%D1%81%D0%BA%D0%B8/BDE18D21-F462-11EB-B5E6-4DF13429A9CF-%D0%A0%D0%B8%D1%81%D0%BE%D0%B2%D1%96%20%D1%87%D1%96%D0%BF%D1%81%D0%B8.png?alt=media&token=7b601455-2050-441d-a848-b3037d0dbd9a&w=800&format=webp&mode=fit&q=59',
        grams: '50 г',
        name: 'Рисові чіпси',
        description: 'Рисові чіпси',
        price: '60',
        id: nanoid(),
      },
    ],

    ids: {},

    addId: (id) => {
      const ids = get().ids;

      if (ids[id]) {
        ids[id] += 1;
      } else {
        Object.defineProperty(ids, id, {
          value: 1,
          enumerable: true,
          writable: true,
          configurable: true,
        });
      }

      set({ ids }); //! { }
    },

    decrementId: (targetId) => {
      const ids = get().ids;

      if (ids[targetId] && ids[targetId] > 1) {
        ids[targetId] -= 1;
      } else if (ids[targetId]) delete ids[targetId];
      set({ ids });
    },

    deleteId: (targetId) => {
      const ids = get().ids;

      if (ids[targetId]) {
        delete ids[targetId];
      }

      set({ ids });
    },
  }))
);
