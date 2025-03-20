<script setup>
import { onMounted } from "vue";
import { useStore } from "vuex";
import DataTable from "primevue/datatable";
import Column from "primevue/column";

const store = useStore();

onMounted(async () => {
  await store.dispatch("fetchData");
});
</script>
<template>
  <DataTable
    :value="store.getters.getData"
    editMode="row"
    dataKey="id"
    paginator
    :rows="5"
    :pt="{
      table: { style: 'min-width: 50rem' },
    }"
  >
    <Column field="id" header="ID" sortable style="width: 10%"> </Column>
    <Column field="username" header="Kullanıcı Adı" sortable style="width: 30%">
    </Column>
    <Column field="phone" header="Telefon No" sortable style="width: 40%">
    </Column>
    <Column field="email" header="Email" sortable style="width: 10%"></Column>
    <Column field="website" header="Web Sitesi" sortable style="width: 10%">
    </Column>
    <Column
      field="action"
      header="İşlem"
      style="width: 10%; min-width: 8rem"
      bodyStyle="text-align:center"
    >
      <template #body="{ data }"> <EditItem :data="data" /> </template
    ></Column>
  </DataTable>
</template>
