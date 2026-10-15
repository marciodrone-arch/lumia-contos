# Guia para publicar e monetizar o Lúmia Contos sem experiência técnica

Este guia foi escrito para quem nunca publicou um site. Você não precisa saber programar e não precisa instalar ferramentas para seguir o caminho mais simples.

## Antes de começar: uma explicação simples

O Lúmia Contos é um site. Os arquivos são as peças que formam o site: `index.html` é a estrutura, `styles.css` é a aparência, `app.js` são as interações e a pasta `public` guarda o ícone e o manifesto.

Você não precisa abrir esses arquivos para publicar. Eu preparei um arquivo `.zip` com tudo organizado. O que você precisa fazer é criar uma conta gratuita no GitHub, colocar os arquivos lá e ativar o GitHub Pages.

O GitHub Pages publica sites estáticos gratuitamente. Ele não cobra mensalidade e não exige cartão para começar. O endereço gratuito ficará parecido com:

`https://SEU-USUARIO.github.io/lumia-contos/`

## Parte 1 — Baixar o pacote pronto

1. Baixe o arquivo `LUMIA-CONTOS-publicar.zip` que acompanha este guia.
2. Salve-o em uma pasta fácil de encontrar, como **Downloads**.
3. No computador, abra a pasta Downloads.
4. Clique com o botão direito no arquivo `.zip`.
5. Escolha **Extrair tudo** ou **Extrair aqui**.
6. Depois de extrair, você deverá enxergar um arquivo chamado `index.html`, outros arquivos e uma pasta chamada `public`.

Muito importante: o arquivo `index.html` precisa ficar logo dentro da pasta que será enviada ao GitHub. Não envie apenas a pasta `dist` e não envie uma pasta externa que contenha outra pasta do projeto dentro dela.

A estrutura correta é parecida com esta:

```text
lumiacontos/
  index.html
  styles.css
  app.js
  package.json
  server.cjs
  app.config.ts
  robots.txt
  sitemap.xml
  public/
    logo.svg
    manifest.webmanifest
    manus-routes.json
```

## Parte 2 — Criar uma conta gratuita no GitHub

1. Acesse [github.com](https://github.com/).
2. Clique em **Sign up** ou **Inscrever-se**.
3. Informe seu e-mail.
4. Crie uma senha.
5. Escolha um nome de usuário simples. Esse nome aparecerá no endereço do seu site.
6. Confirme o e-mail recebido pelo GitHub.
7. Se aparecer uma pergunta sobre plano, escolha o plano **Free**.

O GitHub é o local onde os arquivos ficarão guardados. Nesta primeira opção, o repositório ficará público, porque o GitHub Pages gratuito publica melhor dessa forma. Não coloque senhas, documentos, dados de clientes ou informações pessoais nos arquivos. O pacote do Lúmia Contos não contém segredos.

## Parte 3 — Criar o local onde os arquivos ficarão

1. Depois de entrar no GitHub, clique no botão **New** ou no sinal de **+** e depois em **New repository**.
2. Em **Repository name**, escreva exatamente `lumia-contos`.
3. Em **Description**, escreva: `Livro infantil interativo Lúmia Contos`.
4. Escolha **Public**.
5. Não marque a opção de criar README, `.gitignore` ou licença nesta etapa, porque o pacote já possui os arquivos necessários.
6. Clique em **Create repository**.

Você agora verá uma página vazia com o nome `lumia-contos`.

## Parte 4 — Enviar os arquivos sem usar terminal

1. Na página do repositório vazio, clique em **uploading an existing file**. Se não encontrar, clique em **Add file** e depois em **Upload files**.
2. Abra no computador a pasta que foi criada ao extrair o ZIP.
3. Selecione todos os arquivos e a pasta `public`.
4. Arraste tudo para a área do GitHub que diz **Drag files here**.
5. Espere o upload terminar.
6. Role até o final da página.
7. Em **Commit changes**, deixe a mensagem sugerida ou escreva `publicar primeira versão do Lumia Contos`.
8. Clique em **Commit changes**.

Depois do envio, confirme visualmente que `index.html` aparece na primeira camada do repositório. Clique nele e verifique que ele abre como um arquivo de texto. A pasta `public` também deve aparecer na primeira camada.

Se aparecer algo como `lumiacontos/lumiacontos/index.html`, você enviou uma pasta a mais. Nesse caso, volte e envie o conteúdo da pasta interna, não a pasta externa.

## Parte 5 — Ativar o site gratuito

1. Dentro do repositório, clique na aba **Settings**.
2. No menu lateral, procure **Pages**. Em algumas telas, fica dentro de **Code and automation**.
3. Em **Build and deployment**, localize **Source**.
4. Escolha **Deploy from a branch**.
5. Em branch, escolha `main`.
6. Em pasta, escolha `/ (root)`.
7. Clique em **Save**.
8. Aguarde de 1 a 5 minutos.
9. Volte à página **Settings → Pages**.
10. O GitHub mostrará um endereço parecido com `https://seu-usuario.github.io/lumia-contos/`.
11. Clique nesse endereço para abrir o site.

O endereço correto depende do seu nome de usuário. Não tente copiar o endereço de outra pessoa.

## Parte 6 — Testar o site publicado

Abra o endereço no celular e faça estes testes:

1. A página inicial aparece com a ilustração da Lua e da raposinha.
2. O botão **Começar história** abre o leitor.
3. O botão **Próxima cena** avança cinco cenas.
4. O botão **Voltar** retorna uma cena.
5. O tema **Oceano calmo** muda as cores.
6. O botão de Lua ativa o modo noturno.
7. O botão **Ouvir história** usa a voz do dispositivo, quando o navegador permitir.
8. O botão **Ver como funciona** abre a apresentação do Clube Lúmia.
9. O site não apresenta dados de teste, senhas ou mensagens internas.

Se aparecer uma tela 404, espere alguns minutos e atualize. Se continuar, entre em **Settings → Pages** e confirme que a fonte está como branch `main` e pasta `/ (root)`.

## Parte 7 — Colocar um nome fácil depois

No início, use o endereço gratuito do GitHub. Não compre domínio agora.

Quando o projeto começar a receber visitantes, você pode comprar um domínio como `lumiacontos.com.br`. Isso é opcional e custa dinheiro. Não é necessário para testar a ideia ou conseguir os primeiros leitores.

## Parte 8 — O que significa monetizar sem investir nada

É possível começar sem mensalidade e sem comprar anúncios, mas “sem investir nada” não significa que toda venda será sem taxa. Plataformas de pagamento normalmente descontam uma taxa quando você recebe uma compra. Essa taxa só aparece quando existe uma venda, mas os valores mudam conforme o provedor e o método de pagamento.

Não prometa assinatura paga antes de ter uma forma segura de receber. Nunca peça número de cartão pelo WhatsApp, e-mail ou pelo próprio site.

## Estratégia recomendada para o Lúmia Contos

### Etapa A — Atrair famílias sem gastar

Publique duas histórias gratuitas e divulgue o endereço para pessoas conhecidas, grupos de leitura e educadores que tenham interesse. Não anuncie para crianças diretamente. A comunicação deve ser dirigida a pais, mães e responsáveis.

Faça posts simples com mensagens como:

> “Cinco minutos de história calma para a rotina de dormir. Experimente o Lúmia Contos gratuitamente.”

Você também pode criar um QR Code gratuito apontando para o endereço do GitHub Pages e colocá-lo em materiais autorizados de escolas, bibliotecas ou eventos.

### Etapa B — Medir interesse antes de cobrar

Por enquanto, o botão do Clube Lúmia é uma vitrine. Para medir interesse sem pagar uma ferramenta, crie um formulário gratuito no Google Forms com três perguntas:

1. Nome ou apelido do responsável.
2. E-mail para receber novidades.
3. Qual história a família gostaria de ouvir?

No botão do Clube Lúmia, você poderá substituir o comportamento atual por um link para esse formulário. O formulário deve pedir autorização para enviar novidades e deve ter uma mensagem clara de que não existe cobrança.

Não colete nome completo de crianças, data de nascimento, endereço, fotos ou dados sensíveis. A criança não deve preencher o formulário sozinha.

### Etapa C — Vender um produto simples

Antes de criar uma assinatura, teste algo simples:

- pacote digital com 10 histórias;
- coleção de histórias para uma época do ano;
- áudio narrado para responsáveis;
- licença para uma escola ou espaço infantil usar o conteúdo.

Você pode criar uma página de pagamento em um provedor que ofereça link de pagamento. Compare as opções disponíveis no Brasil, leia as taxas atuais e escolha uma que não cobre mensalidade para começar. A taxa costuma ser descontada apenas quando há pagamento.

### Etapa D — Clube Lúmia

Quando houver pessoas interessadas, o plano sugerido no app é:

- Plano mensal: R$ 14,90.
- Possível plano anual: R$ 149,00, somente depois de validar o mensal.
- Benefícios: biblioteca completa, novas histórias, temas especiais e experiência sem anúncios.

Antes de cobrar, você precisará adicionar uma página com preço, periodicidade, política de cancelamento, política de privacidade e contato de suporte. Também será necessário controlar quais assinantes podem acessar o conteúdo premium. Esconder um card no navegador não protege conteúdo pago.

## O que não recomendo

Não coloque anúncios direcionados a crianças. Eles prejudicam a experiência e podem criar problemas de privacidade.

Não peça cartão por mensagem.

Não prometa “conteúdo ilimitado” sem conseguir entregar.

Não colete dados de crianças para fazer marketing.

Não pague tráfego ou domínio antes de confirmar que famílias realmente usam o app.

Não use o GitHub Pages como sistema de pagamento ou área privada. Ele serve para publicar a parte gratuita e a vitrine. O pagamento e o acesso premium devem ser tratados por serviços próprios e seguros.

## Se você quiser fazer tudo pelo celular

O GitHub permite criar repositórios pelo navegador do celular, mas enviar muitos arquivos é mais confortável em um computador. Se estiver somente no celular, extraia o ZIP usando o aplicativo de arquivos, abra o GitHub no navegador e use **Add file → Upload files**. Se o celular não permitir selecionar a pasta `public`, use um computador ou envie os arquivos da pasta `public` em um segundo upload.

## Checklist final para marcar com caneta

- [ ] Baixei o ZIP.
- [ ] Extraí o ZIP.
- [ ] Criei uma conta gratuita no GitHub.
- [ ] Criei o repositório público `lumia-contos`.
- [ ] Enviei `index.html` para a primeira camada do repositório.
- [ ] Enviei a pasta `public`.
- [ ] Ativei Settings → Pages → main → root.
- [ ] Abri o endereço gratuito no celular.
- [ ] Testei o leitor e os temas.
- [ ] Criei um formulário de interesse sem cobrança.
- [ ] Só vou ativar pagamentos depois de revisar taxas, privacidade e cancelamento.

Se você travar em uma tela, não apague o repositório. Faça uma captura de tela mostrando apenas a página do GitHub, escondendo e-mails e dados pessoais, e use o título da seção deste guia para identificar onde parou.
