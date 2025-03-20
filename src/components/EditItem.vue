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

const updateUserData = async () => {
  try {
    await store.dispatch("updateUserDetail", updateUserForm.value);
    if (store.getters.getError) {
      throw new Error(store.getters.getError);
    }
    toast.add({
      severity: "success",
      summary: "İşlem Başarılı",
      detail: "Veri Güncellendi!",
      life: 3000,
    });

    visible.value = false;
  } catch (error) {
    toast.add({
      severity: "error",
      summary: "Hata",
      detail: error.message || "Güncelleme başarısız oldu!",
      life: 3000,
    });
  }
};
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
      <Stepper value="1" class="basis-[50rem]">
        <StepList>
          <Step value="1">Kullanıcı Bilgileri</Step>
          <Step value="2">Adres Bilgileri</Step>
        </StepList>
        <StepPanels>
          <StepPanel v-slot="{ activateCallback }" value="1">
            <div class="flex gap-4 mb-4">
              <label for="username" class="font-semibold w-24">
                Kullanıcı Adı</label
              >
              <InputText
                id="username"
                v-model="updateUserForm.username"
                class="flex-auto"
                autocomplete="off"
              />
            </div>
            <div class="flex gap-4 mb-8">
              <label for="email" class="font-semibold w-24">Email</label>
              <InputText
                id="username"
                v-model="updateUserForm.email"
                class="flex-auto"
                autocomplete="off"
              />
            </div>
            <div class="flex gap-4 mb-8">
              <label for="email" class="font-semibold w-24"
                >Telefon Numarası</label
              >
              <InputText
                id="username"
                v-model="updateUserForm.phone"
                class="flex-auto"
                autocomplete="off"
              />
            </div>
            <div class="flex gap-4 mb-8">
              <label for="website" class="font-semibold w-24">Websitesi</label>
              <InputText
                id="username"
                v-model="updateUserForm.website"
                class="flex-auto"
                autocomplete="off"
              />
            </div>

            <div class="flex pt-6 justify-end">
              <Button
                label="Devam Et"
                icon="pi pi-arrow-right"
                iconPos="right"
                @click="activateCallback('2')"
              />
            </div>
          </StepPanel>
          <StepPanel v-slot="{ activateCallback }" value="2">
            <div class="flex gap-4 mb-4">
              <label for="username" class="font-semibold w-24"> Şehir</label>
              <InputText
                id="city"
                v-model="updateUserForm.address.city"
                class="flex-auto"
                autocomplete="off"
              />
            </div>
            <div class="flex gap-4 mb-8">
              <label for="street" class="font-semibold w-24">Sokak</label>
              <InputText
                id="street"
                v-model="updateUserForm.address.street"
                class="flex-auto"
                autocomplete="off"
              />
            </div>
            <div class="flex gap-4 mb-8">
              <label for="suite" class="font-semibold w-24">Apartman</label>
              <InputText
                id="suite"
                v-model="updateUserForm.address.suite"
                class="flex-auto"
                autocomplete="off"
              />
            </div>
            <div class="flex gap-4 mb-8">
              <label for="zipcode" class="font-semibold w-24">Posta Kodu</label>
              <InputText
                id="zipcode"
                v-model="updateUserForm.address.zipcode"
                class="flex-auto"
                autocomplete="off"
              />
            </div>

            <div class="flex pt-6 justify-between">
              <Button
                label="Geri"
                severity="secondary"
                icon="pi pi-arrow-left"
                @click="activateCallback('1')"
              />
              <Button
                label="Güncelle"
                icon="pi pi-check"
                iconPos="right"
                @click="updateUserData"
              />
            </div>
          </StepPanel>
        </StepPanels>
      </Stepper>
    </Dialog>
  </div>
</template>
