import { PencilLine } from 'phosphor-react';

import styles from './Sidebar.module.css';
export function Sidebar() {
  return (
    <aside className={styles.sidebar}>
      <img
        className={styles.cover}
        src="https://images.unsplash.com/photo-1605379399642-870262d3d051?auto=format&fit=crop&q=50&w=500" alt="Capa"
      />

      <div className={styles.profile}>
        <img className={styles.avatar} src="https://avatars.githubusercontent.com/u/70289493?v=4" alt="Foto de Perfil" />

        <strong>Gabriel Carmo</strong>
        <span>Web Developer</span>
      </div>

      <footer>
        <a href="#">
          <PencilLine size={20} />
          Editar seu perfil
        </a>
      </footer>
    </aside>
  );
}