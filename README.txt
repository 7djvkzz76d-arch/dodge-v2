DODGE V2 — 一步到位版

已包含：
- 完整躲避游戏
- Supabase 云端排行榜
- 公开排行榜提交 RLS SQL
- 金币系统：每通过 3 个障碍获得 1 金币
- 10 款皮肤商店：购买、装备、持久化保存
- 最高分持久化
- 激励广告复活：每局最多 1 次；只有真正获得广告奖励才复活
- 复活后 3 秒无敌
- 广告未配置时明确提示，不会伪造广告奖励
- PWA manifest / service worker
- 隐私与广告说明

上传到 GitHub Pages 后即可运行。

广告只差 Google Ad Manager 的真实 rewarded ad unit path；填写 ads-config.js 后即可接入真实激励广告。
不要把 Supabase secret key 放进前端。
