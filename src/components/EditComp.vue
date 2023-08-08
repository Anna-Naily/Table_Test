<template>
  <div class="edit-block">
    <span class="edit-heading">Редактирование пользователя</span>
    <form @submit.prevent="update" class="users-block">
      <div class="users-block__el">
        <label class="label-user">Имя</label>
        <input class="input-user" v-model="form.firstName" required />
      </div>
      <div class="users-block__el">
        <label class="label-user">Фамилия</label>
        <input class="input-user" v-model="form.lastName" required />
      </div>
      <button class="btn-edit" type="submit">Изменить</button>
    </form>
  </div>
</template>

<script>
import { reactive, computed, onMounted } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import { getUser, updateUser } from '@/firebase';
export default {
  setup() {
    const router = useRouter();
    const route = useRoute();
    const userId = computed(() => route.params.id);
    const form = reactive({ firstName: '', lastName: '' });
    onMounted(async () => {
      const user = await getUser(userId.value);
      form.firstName = user.firstName;
      form.lastName = user.lastName;
    });
    const update = async () => {
      await updateUser(userId.value, { ...form });
      router.push('/');
      form.firstName = '';
      form.lastName = '';
    };
    return { form, update };
  },
};
</script>

<style lang="scss" scoped>
.edit-block {
  border-radius: 10px;
  background-color: #1976d2;
  max-width: 600px;
  margin: 100px auto;
  display: flex;
  flex-direction: column;
  padding: 20px;
  .edit-heading {
    font-size: 22px;
    color: #ffffffec;
  }
  .users-block {
    display: flex;
    flex-direction: column;
    row-gap: 20px;
    margin-top: 30px;
    .users-block__el {
      display: flex;
      justify-content: space-between;
      width: 300px;
      margin: auto;
      align-items: center;
      .label-user {
        font-size: 16px;
        color: #ffffff;
      }
      .input-user {
        padding: 8px 5px;
        font-size: 14px;
        color: #000000d0;
        border: none;
        border-radius: 5px;
        text-align: center;
      }
    }
  }
  .btn-edit {
    background-color: #45d845;
    border: none;
    border-radius: 15px;
    width: 200px;
    padding: 10px;
    margin: 15px auto;
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