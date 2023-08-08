<template>
  <div>
    <table class="table">
      <tr class="heading">
        <th class="heading__th">Имя</th>
        <th class="heading__th">Фамилия</th>
        <th class="heading__th"></th>
      </tr>
      <tr v-for="{id, firstName, lastName} in users" :key="id">
        <td>{{ firstName }}</td>
        <td>{{ lastName }}</td>
        <td>
          <div class="btn-block">
            <router-link :to="`/edit/${id}`">
              <button class="btn-table">Редактировать</button>
            </router-link>
            <button class="btn-table" @click="deleteUser(id)">Удалить</button>
          </div>
        </td>
      </tr>
    </table>
  </div>
</template>

<script>
import { useLoadUsers, deleteUser } from '@/firebase';
export default {
  name: 'TableComp',
  setup() {
    const users = useLoadUsers();
    return { users, deleteUser };
  },
};
</script>

<style lang="scss" scoped>
.table {
  border: 1px solid #00000081;
  margin: auto;
  width: 500px;
  border-collapse: collapse;
  .heading {
    color: #0b437a;
  }
  .heading__th {
    width: 50px;
    padding: 10px;
    font-size: 18px;
  }
  td {
    border: 1px solid #00000081;
    color: #000000;
    font-size: 16px;
    text-transform: capitalize;
    padding: 10px;
  }
}
.btn-block {
  display: flex;
  justify-content: space-around;
  column-gap: 10px;

  .btn-table {
    background-color: #1976d2;
    border: none;
    width: 115px;
    padding: 10px 5px;
    border-radius: 10px;
    color: white;
    font-size: 14px;
    cursor: pointer;
    transition: 0.2s;
    &:hover {
      background-color: #45d845;
    }
  }
}
</style>