<template>
  <main>
    <Banner />
    <section class="welcome">
      <div class="container">
        <div class="content">
          <h1>Bem vindos!</h1>
          <p>
            Olá, seres humanos incríveis! Bem-vindos a Adopets, o refúgio online
            que apoia a adoção consciente e o resgate de animais. Aqui,
            embarcaremos juntos em uma jornada repleta de amor, ternura e
            histórias de superação. Preparem-se para mergulhar em um oceano de
            fofura e descobrir como um simples ato de adoção pode mudar vidas
            para sempre.
          </p>
          <p>
            Queridos humanos, vocês têm o poder de fazer a diferença na vida de
            um pet. Milhares de nós estamos ansiosos por um lar amoroso, onde
            possamos receber carinho, brincar e desfrutar da companhia daqueles
            que nos amam. Ao escolherem adotar, vocês estão oferecendo uma nova
            chance a um ser indefeso que só deseja ser amado e retribuir todo o
            afeto recebido.
          </p>
          <p>
            Aqui em Adopets, acreditamos que cada pet é um herói em potencial,
            esperando ser resgatado de um destino incerto. Por isso, queremos
            compartilhar histórias inspiradoras de animais que encontraram suas
            famílias perfeitas. Nossos relatos emocionantes vão tocar o coração
            de vocês e mostrar como, por trás de cada rabo abanando e olhar
            carente, existe uma alma grata por uma segunda chance.
          </p>
          <p>
            Sabemos que a decisão de adotar um pet é uma escolha importante. Por
            isso, estaremos aqui para orientá-los e fornecer dicas úteis sobre
            cuidados, treinamento e adaptação. Queremos que vocês se sintam
            confiantes e preparados para essa incrível jornada de receber um
            peludo em suas vidas.
          </p>
          <p>
            Além disso, estaremos sempre atualizando nosso site com informações
            valiosas sobre a importância da esterilização, vacinação e adoção
            responsável. Queremos criar uma comunidade de amantes de animais
            comprometidos com a causa, ajudando a espalhar a conscientização
            sobre os benefícios da adoção.
          </p>
          <p>
            Queridos humanos, juntos podemos fazer a diferença na vida de muitos
            animais e construir um mundo mais compassivo e amoroso. Então, abram
            seus corações e descubram como a adoção consciente pode preencher
            seu lar com amor incondicional. Venham fazer parte dessa incrível
            jornada!
          </p>
          <p>
            Adopets - Por um mundo com mais abraços peludos e corações cheios de
            gratidão.
          </p>
        </div>
      </div>
    </section>
  </main>
</template>
<script>
import Banner from "../components/Banner.vue";
export default {
  components: {
    Banner,
  },
};
</script>

<style lang="scss" scoped>
.welcome {
  .content {
    padding: 0px 16px;
    display: flex;
    flex-direction: column;
    gap: 10px;
  }
}
</style>