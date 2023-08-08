<template>
  <div class="add-main">
    <div class="header-block">Новый пользователь</div>
    <form class="form-block" @submit.prevent="onSubmit">
      <div class="input-block">
        <input v-model="form.firstName" class="form-control" required placeholder="Имя" />
        <input v-model="form.lastName" class="form-control" required placeholder="Фамилия" />
      </div>
      <button class="btn-sbmt" type="submit">Добавить</button>
    </form>
  </div>
</template>

<script>
import { createUser } from '@/firebase';
import { reactive } from 'vue';
export default {
  name: 'AddComp',
  setup() {
    const form = reactive({ firstName: '', lastName: '' });
    const onSubmit = async () => {
      await createUser({ ...form });
      form.firstName = '';
      form.lastName = '';
    };
    return { form, onSubmit };
  },
};
</script>

<style lang="scss" scoped>
.add-main {
  background-color: #1976d2;
  border-radius: 7px;
  width: 800px;
  display: flex;
  flex-direction: column;
  margin: 20px auto 150px;
  padding: 20px;
}
.header-block {
  font-size: 18px;
  color: #ffffff;
  border-bottom: 1px solid #ffffff73;
  text-align: left;
  padding-bottom: 10px;
}
.form-block {
  display: flex;
  justify-content: space-between;
  margin-top: 20px;
  .input-block {
    display: flex;
    column-gap: 10px;
    .form-control {
      padding: 8px 14px;
      font-size: 14px;
      color: #000000c0;
      border-radius: 5px;
      border: none;
    }
  }
  .btn-sbmt {
    background-color: #45d845;
    border: none;
    border-radius: 15px;
    width: 150px;
    font-size: 14px;
    color: rgba(0, 0, 0, 0.705);
    text-transform: uppercase;
    transition: 0.2s;
    cursor: pointer;
    &:hover {
      background-color: #3aad3a;
    }
  }
}
</style>