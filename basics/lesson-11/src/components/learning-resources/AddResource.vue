<template>
  <base-dialog
    v-if="inputIsInvalid"
    title="Invalid Input"
    @close="confirmError"
  >
    <template #default>
      <p>Unfortunatly, at least one input value is invalid!</p>
      <p>Please check your input values.</p>
    </template>
    <template #actions>
      <base-button @click="confirmError">Okay</base-button>
    </template>
  </base-dialog>
  <base-card>
    <form @submit.prevent="submitData">
      <div class="form-control">
        <label for="title"> Title</label>
        <input type="text" id="title" name="title" ref="titleInput" />
      </div>
      <div class="form-control">
        <label for="description"> Description</label>
        <textarea
          id="description"
          name="description"
          row="3"
          ref="descInput"
        ></textarea>
      </div>
      <div class="form-control">
        <label for="link"> URL</label>
        <input type="text" id="link" name="link" ref="linkInput" />
      </div>
      <div>
        <base-button type="submit">Add Resource</base-button>
      </div>
    </form>
  </base-card>
</template>

<script>
export default {
  inject: ['addResource'],
  data() {
    return {
      inputIsInvalid: false,
    };
  },
  methods: {
    confirmError() {
      this.inputIsInvalid = false;
    },
    submitData() {
      const enteredData = {
        title: this.$refs.titleInput.value,
        description: this.$refs.descInput.value,
        link: this.$refs.linkInput.value,
      };

      if (
        enteredData.title.trim() === '' ||
        enteredData.description.trim() === '' ||
        enteredData.link.trim() === ''
      ) {
        this.inputIsInvalid = true;
        return;
      }

      this.addResource(
        enteredData.title,
        enteredData.description,
        enteredData.link
      );
    },
  },
};
</script>

<style scoped>
label {
  font-weight: bold;
  display: block;
  margin-bottom: 0.5rem;
}

input,
textarea {
  display: block;
  width: 100%;
  font: inherit;
  padding: 0.15rem;
  border: 1px solid #ccc;
}

input:focus,
textarea:focus {
  outline: none;
  border-color: #3a0061;
  background-color: #f7ebff;
}

.form-control {
  margin: 1rem 0;
}
</style>
