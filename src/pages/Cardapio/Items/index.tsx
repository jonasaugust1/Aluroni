import items from 'data/cardapio.json';
import Item from './Item';
import styles from './Items.module.scss';
import { useEffect, useState } from 'react';

interface Props {
    busca: string
    filtro: number | null
    ordenador: string
}

export default function Items(props: Props) {

  const [lista, setLista] = useState(items);
  const {busca, filtro, ordenador} = props;

  function testaBusca(title: string) {
    const regex = new RegExp(busca, 'i');
    return regex.test(title);
  }

  function testaFiltro(id: number) {

    if(filtro !== null) return filtro === id;
  }

  function ordenar(novaLista: typeof items) {

    switch(ordenador) {
    case 'porcao': return novaLista.sort((a, b) => a.size > b.size ? 1 : -1);
    case 'qrd_pessoas': return novaLista.sort((a, b) => a.serving > b.serving ? 1 : -1);
    case 'preco' : return novaLista.sort((a, b) => a.price > b.price ? 1 : -1);
    default:
      return novaLista;
    }
  }

  useEffect(() => {
    const novaLista = items.filter(item => testaBusca(item.title) && testaFiltro(item.category.id));
    setLista(ordenar(novaLista));
  }, [busca, filtro, ordenador]);

  return (
    <div className={styles.itens}>
      {lista.map(item => (
        <Item 
          key={item.id} 
          {...item}
        />
      ))}
    </div>
  );
}