const LINK_INDICACAO =
  'https://www.google.com/search?q=traje+esporte+fino+casamento&tbm=isch&hl=pt-BR&client=ms-android-samsung-gs-rev1&prmd=isvn&sa=X&ved=2ahUKEwi6-5_P7938AhVHOLkGHW8UB7IQrNwCKAB6BQgBEKIC&biw=360&bih=700';

export function Information() {
  return (
    <div>
      <h3 className="Garamond mb-6 text-center font-Cormorant text-3xl font-bold text-gray-700">
        {' '}
        Informações importantes
      </h3>

      <div className="flex w-full flex-wrap pb-20">
        <div className="w-full px-4">
          <p className="pb-4 font-Cormorant text-xl leading-6 text-gray-500">
            Queridos amigos e familiares, como escolhemos realizar nosso
            casamento no campo, deixamos algumas orientações de como curtir da
            melhor forma a nossa celebração:
          </p>

          <ul className="list-inside list-disc text-justify font-Cormorant text-xl leading-6 text-gray-500">
            <li className="text-justify">
              Traje requerido:{' '}
              <a
                href={LINK_INDICACAO}
                target="_blank"
                rel="noopener noreferrer"
                className="font-bold text-primary hover:text-senary"
              >
                Esporte Fino
              </a>
              .
            </li>
            <li className="text-justify">
              Sapatos: Evitem sapatos de salto fino, há grama na maior parte dos
              ambientes.
            </li>
            <li className="text-justify">
              Como qualquer ida ao campo, estamos em meio a natureza, então um
              bom repelente pode ser o seu melhor amigo.
            </li>
            <li className="text-justify">
              Estar na natureza é excelente, o lugar é lindo e você pode
              continuar contribuindo com a sua beleza evitando de jogar lixos no
              chão.
            </li>
            <li className="text-justify">
              Divirta-se, converse, ria, dance e tire muitas fotos! Registre e
              curta esse momento feliz com a gente!
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
