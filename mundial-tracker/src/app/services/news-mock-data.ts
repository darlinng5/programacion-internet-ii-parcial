import { News } from '../interfaces/news.interface';

// ─────────────────────────────────────────────
// NOTICIAS — Mundial 2026 (datos mock, módulo aislado)
// ─────────────────────────────────────────────
export const MOCK_NEWS: News[] = [
  {
    id: 1,
    title: 'Todo listo para el arranque del Mundial 2026',
    summary: 'Estados Unidos, México y Canadá afinan los últimos detalles antes del pitazo inicial.',
    content: 'Con los 48 equipos ya confirmados, la organización conjunta entre Estados Unidos, México y Canadá ultima los preparativos logísticos en las 16 sedes elegidas para este Mundial histórico, el primero en disputarse con el nuevo formato de 12 grupos.',
    date: '2026-06-01',
    author: 'Redacción Mundial Tracker',
    category: 'previa',
  },
  {
    id: 2,
    title: 'Así quedaron conformados los 12 grupos',
    summary: 'El sorteo definió los cruces de la fase de grupos para las 48 selecciones participantes.',
    content: 'Cada grupo estará compuesto por 4 equipos, y los dos mejores de cada uno avanzarán junto a los mejores ocho terceros a la nueva fase de dieciseisavos de final.',
    date: '2026-06-03',
    author: 'Redacción Mundial Tracker',
    category: 'general',
  },
  {
    id: 3,
    title: 'Las figuras a seguir en esta edición',
    summary: 'Un repaso a las estrellas que buscarán levantar la copa en su selección.',
    content: 'Entre jóvenes promesas y veteranos con hambre de gloria, este Mundial promete un nivel de competencia altísimo en todas las confederaciones.',
    date: '2026-06-05',
    author: 'Redacción Mundial Tracker',
    category: 'jugadores',
  },
  {
    id: 4,
    title: 'Recorriendo los estadios sede del Mundial 2026',
    summary: 'De Ciudad de México a Toronto, un vistazo a los escenarios que albergarán la fiesta del fútbol.',
    content: 'Las 16 sedes distribuidas entre los tres países anfitriones combinan estadios históricos con recintos de última generación.',
    date: '2026-06-07',
    author: 'Redacción Mundial Tracker',
    category: 'estadios',
  },
  {
    id: 5,
    title: 'Resumen de la primera jornada de la fase de grupos',
    summary: 'Sorpresas, goles y debuts para el recuerdo en el arranque del torneo.',
    content: 'La primera fecha dejó actuaciones destacadas y algún que otro resultado inesperado que ya empieza a mover las tablas de posiciones.',
    date: '2026-06-12',
    author: 'Redacción Mundial Tracker',
    category: 'resultados',
  },
];
