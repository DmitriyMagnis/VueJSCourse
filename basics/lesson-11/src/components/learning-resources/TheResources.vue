<template>
  <base-card>
    <base-button
      @click="setSelectedTab('stored-resources')"
      :mode="storedResButtonMode"
      >Stored Resources</base-button
    >
    <base-button
      @click="setSelectedTab('add-resource')"
      :mode="addResButtonMode"
      >Add Resource</base-button
    >
  </base-card>
  <keep-alive>
    <component :is="selectedTab"></component>
  </keep-alive>
</template>

<script>
import StoredResources from './StoredResources.vue';
import AddResource from './AddResource.vue';

export default {
  components: {
    StoredResources,
    AddResource,
  },
  computed: {
    storedResButtonMode() {
      return this.selectedTab === 'stored-resources' ? null : 'flat';
    },
    addResButtonMode() {
      return this.selectedTab === 'add-resource' ? null : 'flat';
    },
  },
  data() {
    return {
      selectedTab: 'stored-resources',
      storedResources: [
        {
          id: 1,
          title: 'Vue.js Documentation',
          link: 'https://vuejs.org/v2/guide/',
          description: 'Official Vue.js documentation for version 2.x.',
        },
        {
          id: 2,
          title: 'Vue Router Guide',
          link: 'https://router.vuejs.org/',
          description:
            'Documentation for Vue Router, the official router for Vue.js.',
        },
        {
          id: 3,
          title: 'Vuex Documentation',
          link: 'https://vuex.vuejs.org/',
          description:
            'Official documentation for Vuex, the state management pattern + library for Vue.js applications.',
        },
      ],
    };
  },
  provide() {
    return {
      resources: this.storedResources,
      addResource: this.addResource,
      deleteResource: this.removeResource,
    };
  },
  methods: {
    setSelectedTab(tab) {
      this.selectedTab = tab;
    },
    addResource(title, description, link) {
      const newResource = {
        id: new Date().toISOString(),
        title,
        description,
        link,
      };
      this.storedResources.unshift(newResource);
      this.selectedTab = 'stored-resources';
    },
    removeResource(id) {
      const resIndex = this.storedResources.findIndex(
        (resource) => resource.id === id
      );

      this.storedResources.splice(resIndex, 1);
    },
  },
};
</script>
