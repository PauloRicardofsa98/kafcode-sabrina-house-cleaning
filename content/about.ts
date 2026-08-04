/**
 * Conteúdo pessoal da página "Sobre".
 *
 * Está vazio de propósito: a história da Sabrina tem que ser contada por ela,
 * não inventada aqui. Enquanto `story` estiver vazio, a seção simplesmente não
 * é renderizada e a página segue completa com o que a gente pode afirmar com
 * segurança (como trabalhamos, o que prometemos, onde atendemos).
 *
 * TODO CLIENTE: escrever 2 ou 3 parágrafos em primeira pessoa: de onde ela é,
 * há quanto tempo limpa casas na Bay Area, por que começou o próprio negócio.
 * Nos três idiomas, se possível; senão, escrevo a tradução a partir do original.
 */

export type AboutStory = {
  /** Parágrafos em primeira pessoa, por idioma. */
  en: string[];
  pt: string[];
  es: string[];
};

export const aboutStory: AboutStory = {
  en: [],
  pt: [],
  es: [],
};

/**
 * Foto real da Sabrina.
 *
 * TODO CLIENTE: foto vertical, boa luz natural, de preferência trabalhando numa
 * casa real. Foto de pessoa converte muito mais que ilustração nesta página.
 * Enquanto não existir, a página usa a mascote da logo.
 */
export const aboutPhoto: string | null = null;
