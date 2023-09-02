---
layout: layouts/default.njk
pageTitle: 🏈🐖 Teams
title: Team Profiles
---

{%- for profile in siteData.activeProfiles -%}
<div class="neu ph3 pv2 mv3">
  <h2 class="flex justify-between">
    <span>{{profile.Code}}</span>
    <span>{{profile.TeamName}}</span>
    <span><small class="gray">{{profile.RealName}}</small></span>
  </h2>
  <p class="gray i">
    {{profile.Fact}}
  </p>
  <table class="f6 collapse">
    <tr>
      <td class="ph2 br b--gray"><b>Fan for</b> {{profile.FanFor}}</td>
      <td class="ph2 br b--gray">{{profile.FanSeason}} of NFL Fantasy</td>
      <td class="ph2"><b>Supports</b> {{profile.Supports}}</td>
    </tr>
  </table>
  <p>
    {{profile.Connection}}
  </p>
</div>
{%- endfor -%}
