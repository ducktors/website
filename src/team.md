---
layout: page
---
<script setup>
import {
  VPTeamPage,
  VPTeamPageTitle,
  VPTeamMembers
} from 'vitepress/theme'

const members = [
  {
    avatar: 'https://avatars.githubusercontent.com/u/1620916?v=4',
    name: 'Maksim Sinik',
    links: [
      { icon: 'github', link: 'https://github.com/fox1t' },
      { icon: 'twitter', link: 'https://twitter.com/maksimsinik' }
    ]
  },
  {
    avatar: 'https://avatars.githubusercontent.com/u/6388707?v=4',
    name: 'Matteo Vivona',
    links: [
      { icon: 'github', link: 'https://github.com/matteovivona' },
      { icon: 'twitter', link: 'https://twitter.com/tehKapa' }
    ]
  },
  {
    avatar: 'https://avatars.githubusercontent.com/u/21338507?v=4',
    name: 'Alessandro Magionami',
    links: [
      { icon: 'github', link: 'https://github.com/alemagio' },
      { icon: 'twitter', link: 'https://twitter.com/alemagionami' }
    ]
  },
  {
    avatar: 'https://avatars.githubusercontent.com/u/127878?v=4',
    name: 'Manuel S. Martone',
    links: [
      { icon: 'github', link: 'https://github.com/hoghweed' },
      { icon: 'twitter', link: 'https://twitter.com/codebrainr' }
    ]
  },

]
</script>

<VPTeamPage>
  <VPTeamPageTitle>
    <template #title>
      The Collective
    </template>
    <template #lead>
      The development of Ducktors' Projects is lead by a small team of seasoned developers and OSS contributors.
    </template>
  </VPTeamPageTitle>
  <VPTeamMembers
    size="small"
    :members="members"
  />
</VPTeamPage>
