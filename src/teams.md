---
layout: layouts/default.njk
pageTitle: 🏈🐖 Teams
title: Team Profiles
---

<h2>
  {{siteData.season}} season
</h2>

{%- for profile in siteData.activeProfiles -%}
<div class="neu ph3 pv2 mv3">
  <h2 class="flex justify-between">
    <span class="tl f6 lh-2">{{profile.Code}}</span>
    <span class="tc">{{profile.TeamName}}</span>
    <span class="tr gray f6 lh-2">{{profile.RealName}}</span>
  </h2>
  <p class="gray i">
    {{profile.Fact}}
  </p>
  <table class="f6 collapse">
    <tr>
      <td class="ph2 br b--gray"><b>Fan since</b> {{profile.NflYear1}}</td>
      <td class="ph2 br b--gray">{{profile.FanSeason}} of NFL Fantasy</td>
      <td class="ph2"><b>Supports</b> {{profile.Supports}}</td>
    </tr>
  </table>
  <p>
    {{profile.Connection}}
  </p>
</div>
{%- endfor -%}

<h2>
  Alumni
</h2>

{%- for profile in siteData.alumniProfiles -%}
<div class="neu ph3 pv2 mv3">
  <h2 class="flex justify-between">
    <span class="tl f6 lh-2">{{profile.Code}}</span>
    <span class="tc">{{profile.TeamName}}</span>
    <span class="tr gray f6 lh-2">{{profile.RealName}}</span>
  </h2>
  <p class="gray i">
    {{profile.Fact}}
  </p>
  <table class="f6 collapse">
    <tr>
      <td class="ph2 br b--gray"><b>Fan since</b> {{profile.NflYear1}}</td>
      <td class="ph2 br b--gray">{{profile.FanSeason}} of NFL Fantasy</td>
      <td class="ph2"><b>Supports</b> {{profile.Supports}}</td>
    </tr>
  </table>
  <p>
    {{profile.Connection}}
  </p>
</div>
{%- endfor -%}