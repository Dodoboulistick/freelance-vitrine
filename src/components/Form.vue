<template>
  <form ref="contactForm" @submit.prevent="sendEmail">
    <div class="grid grid-cols-2">
      <div class="col-span-2 md:col-span-1 px-3 my-2">
        <label class="block" for="firstname">Prénom</label>
        <input
          type="text"
          id="firstname"
          v-model="firstname"
          name="firstname"
          placeholder="Votre prénom..."
          class="border-[1px] rounded-md w-full border-gray-300 py-1 pl-2"
        />
        <p v-if="firstnameError" class="text-red-500">
          Ce champ ne peut pas être vide.
        </p>
      </div>
      <div class="col-span-2 md:col-span-1 px-3 my-2">
        <label class="block" for="lastname">Nom</label>
        <input
          type="text"
          id="lastname"
          v-model="lastname"
          name="lastname"
          placeholder="Votre nom..."
          class="border-[1px] rounded-md w-full border-gray-300 py-1 pl-2"
        />
        <p v-if="lastnameError" class="text-red-500">
          Ce champ ne peut pas être vide.
        </p>
      </div>
      <div class="col-span-2 px-3 my-2">
        <label class="block" for="email">Email</label>
        <input
          type="email"
          id="email"
          v-model="email"
          name="email"
          placeholder="Votre email..."
          class="border-[1px] rounded-md w-full border-gray-300 py-1 pl-2"
        />
        <p v-if="emailError" class="text-red-500">
          Ce champ ne peut pas être vide.
        </p>
      </div>
      <div class="col-span-2 px-3 my-2">
        <label class="block" for="message">Message</label>
        <textarea
          id="message"
          name="message"
          v-model="message"
          rows="5"
          placeholder="Votre message..."
          class="border-[1px] rounded-md w-full border-gray-300 py-1 pl-2"
        ></textarea>
        <p v-if="messageError" class="text-red-500">
          Ce champ ne peut pas être vide.
        </p>
        <div class="col-span-2 my-4">
          <input
            type="submit"
            value="Envoyer"
            class="
              block
              mx-auto
              bg-indigo-600
              px-4
              py-2
              text-white
              rounded-md
              hover:cursor-pointer hover:bg-indigo-700
            "
          />
          <p v-if="isSuccess" class="text-green-400 text-center mt-3">
            Votre message a bien été envoyé!
          </p>
        </div>
      </div>
    </div>
  </form>
</template>

<script lang="ts">
import { ref, defineComponent } from "vue";
import config from "./../config/smtp.config.json";
import emailjs from "emailjs-com";

export default defineComponent({
  name: "FormPage",
  setup() {
    const firstname = ref("");
    const lastname = ref("");
    const email = ref("");
    const message = ref("");
    const firstnameError = ref(false);
    const lastnameError = ref(false);
    const emailError = ref(false);
    const messageError = ref(false);
    const isSuccess = ref(false);
    const contactForm = ref();

    const checkEmpty = () => {
      firstnameError.value = firstname.value == "";
      lastnameError.value = lastname.value == "";
      emailError.value = email.value == "";
      messageError.value = message.value == "";
      return !(
        firstnameError.value ||
        lastnameError.value ||
        emailError.value ||
        messageError.value
      );
    };

    const sendEmail = () => {
      let isChecked = checkEmpty();
      if (isChecked) {
        emailjs
          .sendForm(config.ID, config.TEMPLATE, contactForm.value, config.KEY)
          .then(
            () => {
              firstname.value =
                lastname.value =
                email.value =
                message.value =
                  "";
              isSuccess.value = true;
              setTimeout(() => {
                isSuccess.value = false;
              }, 5000);
            },
            () => {
              alert(
                `Une erreur s'est produite. Veuillez envoyer un mail à dorian.mailhe@gmail.com`
              );
            }
          );
      }
    };

    return {
      firstname,
      lastname,
      email,
      message,
      firstnameError,
      lastnameError,
      emailError,
      messageError,
      isSuccess,
      contactForm,
      sendEmail,
    };
  },
});
</script>