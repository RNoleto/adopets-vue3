<template>
  <div class="card">
    <slot name="image" class="card-image-container">
      <slot name="image"></slot>
    </slot>
    <div class="card-content">
      <h2 class="card-title">
        <slot name="title">{{ title }}</slot>
      </h2>
      <p class="card-date">
        <slot name="date">{{ date }}</slot>
      </p>
      <p class="card-description">
        <slot name="description">{{ description }}</slot>
        <slot></slot>
      </p>
      <div class="card-button">
        <slot name="button">
          <div class="btn" @click="handleButtonClick">Ver Mais</div>
        </slot>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    title: {
      type: String,
      default: "Default Title",
    },
    description: {
      type: String,
      default: "Default Description",
    },
  },
  methods: {
    handleButtonClick() {
      console.log("Botão 'Ver Mais' clicado!");
    },
  },
};
</script>
<style lang="scss" scoped>
.card {
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 4px 8px rgba($color: #000000, $alpha: 0.1);
  &-content {
    display: flex;
    flex-direction: column;
    gap: 5px;
    padding: 10px 10px;
  }
  &-title {
    font-size: 18px;
  }
  &-date {
    font-size: 12px;
    transform: translateY(-5px);
  }
  &-description {
    font-size: 14px;
    text-align: justify;
    color: var(--color-4);
  }
  &-button {
    margin-top: 12px;
    .btn {
      background-color: var(--color-1);
      color: #fff;
      padding: 8px 16px;
      border: none;
      border-radius: 4px;
      cursor: pointer;
      transition: background-color 0.3s;
      text-align: center;
      &-hover {
        background-color: var(--color-2);
      }
    }
  }
}
</style>