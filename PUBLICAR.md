# Lúmia Contos — publicação e monetização

## O que já está pronto

O projeto é um app web estático, mobile-first e sem dependências externas obrigatórias. Ele inclui biblioteca de histórias, seis temas visuais, leitor por cenas com navegação, retomada de leitura, narração pela voz do dispositivo, modo noturno, suporte a teclado, manifesto PWA, ícone da marca e uma vitrine do Clube Lúmia.

A monetização foi preparada sem cobrar nada nesta versão: existem histórias gratuitas para aquisição e uma área premium sinalizada para conversão. O app apresenta o **Clube Lúmia**, com a proposta de R$ 14,90/mês, biblioteca completa, história semanal e temas especiais. O botão atual registra interesse visualmente; em produção, ele deve ser conectado a um checkout seguro, como Stripe Checkout, Mercado Pago ou Asaas, e a um backend que controle assinatura e acesso.

## Rodar localmente

1. Abra um terminal na pasta do projeto.
2. Instale o Node.js 20 ou superior.
3. Execute `npm run start`.
4. Abra `http://localhost:3000` no navegador.
5. Teste principalmente em uma janela estreita, como 390 × 844, e em tablet vertical.

Não é necessário banco de dados para a versão gratuita. A posição da leitura e o tema escolhido ficam salvos no navegador do visitante.

## Publicar no Manus Webdev

1. Faça as alterações desejadas e rode `npm run build`.
2. Confirme que a pasta `dist/` foi criada e contém `index.html` e `public/`.
3. Crie um checkpoint/commit na branch principal do projeto.
4. Na configuração de publicação, escolha **Static output**.
5. Use o comando de build `npm run build`.
6. Use `dist` como diretório de saída.
7. Publique o checkpoint mais recente.
8. Abra a URL publicada em um celular e valide o carregamento, o manifesto, o leitor, o modo noturno e as interações.

Como o app é estático, não é necessário ativar servidor ou banco para a primeira versão. Isso mantém a hospedagem simples e barata. Se o Clube Lúmia passar a cobrar assinatura, ative um servidor, banco e o provedor de pagamento escolhido antes de adicionar o checkout.

## Publicar em Vercel, Netlify ou Cloudflare Pages

1. Conecte o repositório Git do projeto ao provedor escolhido.
2. Selecione um projeto estático ou framework agnóstico.
3. Use `npm run build` como comando de build.
4. Use `dist` como diretório de publicação.
5. Não adicione variáveis de ambiente para a versão gratuita.
6. Faça o primeiro deploy e abra a URL de produção.
7. Configure um domínio próprio, se desejar, e ative HTTPS.

## Próxima etapa da monetização

Para colocar o Clube Lúmia no ar, a ordem recomendada é:

1. Escolher o provedor de pagamento e abrir a conta comercial.
2. Criar um plano mensal e, opcionalmente, um plano anual com desconto.
3. Implementar checkout hospedado pelo provedor; não armazene dados de cartão no app.
4. Adicionar login ou link mágico para a família recuperar a assinatura em outro dispositivo.
5. Criar uma tabela de assinaturas no banco, com status ativo, cancelado e período de teste.
6. Proteger as histórias premium no servidor; não confie apenas em esconder cards no navegador.
7. Exibir o valor, a periodicidade, a política de cancelamento e os termos antes da compra.
8. Medir conversão da história gratuita para o clube, cancelamentos e leitura recorrente.

Uma boa estratégia inicial é manter duas histórias completas grátis, oferecer uma degustação do conteúdo premium e testar **R$ 14,90/mês** versus **R$ 149,00/ano**. Evite anúncios: para crianças pequenas, uma experiência sem interrupções é parte importante do valor do produto.

## Checklist antes de divulgar

- Testar em Chrome/Safari mobile e tablet vertical.
- Conferir que o texto não fica cortado em telas de 320 px.
- Testar os botões com uma mão e verificar áreas de toque.
- Validar que o áudio pode ser parado e que o leitor retorna ao ponto salvo.
- Conferir título, descrição, ícone, manifesto e HTTPS.
- Adicionar política de privacidade e termos antes de ativar assinatura.
- Revisar o conteúdo com um adulto responsável e manter linguagem adequada para 0 a 4 anos.
