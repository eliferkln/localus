<script setup>
import { ref, defineProps } from "vue";
import { useStore } from "vuex";
import { useToast } from "primevue/usetoast";

const toast = useToast();
const store = useStore();
const props = defineProps({
  data: Object,
});

const visible = ref(false);

const updateUserForm = ref({
  id: props.data.id,
  username: props.data.username || "",
  email: props.data.email || "",
  phone: props.data.phone || "",
  website: props.data.website || "",
  address: {
    city: props.data.address.city || "",
    street: props.data.address.street || "",
    suite: props.data.address.suite || "",
    zipcode: props.data.address.zipcode || "",
  },
});


</script>
<template>
  <Toast />
  <div class="card flex justify-center">
    <Button
      @click="visible = true"
      type="button"
      icon="pi pi-pencil"
      aria-haspopup="true"
      aria-controls="overlay_menu"
    />

    <Dialog
      v-model:visible="visible"
      modal
      header="Güncelle"
      :style="{ width: '50rem' }"
    >

    </Dialog>
  </div>
</template>
