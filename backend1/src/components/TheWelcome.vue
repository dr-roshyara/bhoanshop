<!-- eslint-disable prettier/prettier -->
<script setup lang="ts">
import WelcomeItem from "./WelcomeItem.vue";
import DocumentationIcon from "./icons/IconDocumentation.vue";
import ToolingIcon from "./icons/IconTooling.vue";
import EcosystemIcon from "./icons/IconEcosystem.vue";
import CommunityIcon from "./icons/IconCommunity.vue";
import SupportIcon from "./icons/IconSupport.vue";
</script>

<template>
  <div class="md:min-h-screen md:px-4 md:ml-4 text-base">
    <WelcomeItem>
      <template #icon>
        <DocumentationIcon />
      </template>
      <template #heading> Documentation</template>
      <div>
        Bhojan Shop provides you all in one solution for Gastronomy Business.
        This software provides you the following services.
        <ul class="list-disc list-inside">
          <li>Anroid Billing and order system at your restaurant</li>
          <li>Online order system of your restaurant</li>
          <li>Online Finance Overview of Business</li>
          <li>Sale analysis</li>
          <li>Customer management</li>
          <li>Coupen selling system</li>
        </ul>
      </div>
    </WelcomeItem>

    <WelcomeItem>
      <template #icon>
        <ToolingIcon />
      </template>
      <template #heading>Online Data storage</template>
      <div>
        This software saves all your sale at database system so that you can
        check your sale from anywhere and any time
      </div>
    </WelcomeItem>

    <WelcomeItem>
      <template #icon>
        <EcosystemIcon />
      </template>
      <template #heading>Ecosystem</template>
      <div>
        Use of billing system-> online order system->balance sheet-> ->customer
        analysis
      </div>
    </WelcomeItem>

    <WelcomeItem>
      <template #icon>
        <CommunityIcon />
      </template>
      <template #heading>Community</template>
      <div>Have any technical questions? Ask them in the customer forum.</div>
    </WelcomeItem>

    <WelcomeItem>
      <template #icon>
        <SupportIcon />
      </template>
      <template #heading>Support Bhojanshop</template>
      <div>
        Bhojan Shop relies on community backing for its sustainability. Please
        support us by providing your feedback and your creative ideas to improve
        or maintain the best quality.
      </div>
    </WelcomeItem>
  </div>
</template>
