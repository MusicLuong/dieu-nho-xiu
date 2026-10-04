## Spec Header

| Field | Value |
| --- | --- |
| Product Name | Trang web tỏ tình qua thư viết tay |
| Owner | Nhạc |
| Status | Draft |
| Last Updated | 2024-06-09 |
| Accountable Role | Product Owner (Nhạc) |
| Target Release | Unknown |
| Stakeholders | Nhạc, Đội phát triển front-end |
| Reviewers | Unknown |
| Version | 1.0 |

## The Problem

### Required Problem Statement

Người dùng muốn tạo trải nghiệm tỏ tình độc đáo, riêng tư và cảm xúc thông qua một trang web mô phỏng mở thư tay trên thiết bị di động. Trải nghiệm này cần tạo cảm giác bất ngờ, cá nhân hóa và chỉ dành riêng cho một người nhận cụ thể.

* User: Người nhận thư (Trương Hạ Kiều Vi)
* Job: Nhận và mở một bức thư tỏ tình đặc biệt, chỉ dành riêng cho mình
* Workflow: Truy cập trang web, nhập đúng tên, mở phong thư, xem nội dung thư và hiệu ứng hoạt hình cuối trang
* Pain points: Các hình thức tỏ tình số hiện tại thiếu tính cá nhân hóa, không tạo được cảm giác "chỉ dành cho một người" và thiếu hiệu ứng cảm xúc như thư tay truyền thống.

### Problem Details

* Scope: Một trang web đơn giản, chỉ phục vụ một mục đích duy nhất là tỏ tình qua thư viết tay.
* Frequency: Một lần sử dụng chính, có thể xem lại nhiều lần.
* Evidence: Yêu cầu cá nhân hóa, bảo mật nội dung thư, tạo trải nghiệm cảm xúc mạnh mẽ.

### Evidence Inventory

| Evidence Source | Observation | Confidence |
| --- | --- | --- |
| User request | Đề xuất trực tiếp từ Nhạc | High |
| UX best practice | Trải nghiệm cá nhân hóa tăng cảm xúc | Medium |

### Problem Quality Bar

* Cụ thể: Đúng đối tượng, đúng mục đích
* Khẩn cấp: Phục vụ dịp tỏ tình đặc biệt
* Có bằng chứng: Yêu cầu từ người dùng, tham khảo UX

### Agent Prompt: Strengthen The Problem

Đảm bảo mọi yếu tố cá nhân hóa, bảo mật và hiệu ứng cảm xúc đều được làm rõ trong giải pháp.

## The Bet

### Required Bet Format

Nếu xây dựng trang web tỏ tình mô phỏng mở thư tay, chỉ mở khi nhập đúng tên người nhận, với hiệu ứng động và hoạt hình chibi cuối trang, thì người nhận sẽ cảm thấy bất ngờ, xúc động và trải nghiệm sẽ trở nên đáng nhớ hơn so với các hình thức tỏ tình số thông thường.

### Bet Details

* Shipment: Một trang web tỏ tình mobile-first, hiệu ứng mở thư, xác thực tên, hoạt hình chibi cuối trang
* User: Trương Hạ Kiều Vi
* Behavior Change: Người nhận cảm thấy được quan tâm, trải nghiệm cá nhân hóa, tăng cảm xúc
* Metrics: Phản hồi cảm xúc từ người nhận (qualitative)
* Assumptions: Hiệu ứng động và xác thực tên sẽ tạo cảm giác đặc biệt, riêng tư

### Example Bet

Nếu người nhận nhập đúng tên và mở được thư, trải nghiệm hiệu ứng động và hoạt hình chibi sẽ khiến họ cảm thấy xúc động và ghi nhớ lâu dài.

### Good Bet Checklist

* Cụ thể, đo lường được (qualitative)
* Có thể kiểm chứng qua phản hồi người nhận
* Độc lập với các yếu tố bên ngoài

### Agent Prompt: Make The Bet Falsifiable

Có thể kiểm chứng qua phản hồi thực tế của người nhận sau khi trải nghiệm.

## Success Criteria

### Required Success Criteria

| Behavior/Signal | Target | Anti-signal |
| --- | --- | --- |
| Nhập đúng tên, mở được thư | 100% | Không mở được thư khi nhập sai |
| Hiệu ứng mở thư mượt mà, không gây khó chịu | 100% | Hiệu ứng giật, không hỗ trợ prefers-reduced-motion |
| Ảnh thư hiển thị đúng, rõ nét | 100% | Ảnh lỗi, không hiển thị |
| Animation chibi xuất hiện cuối trang | 100% | Không có hoạt hình hoặc lỗi |
| Thông báo đúng khi nhập sai tên | 100% | Không có thông báo hoặc thông báo sai |

### User Behavior Criteria

* Người nhận cảm thấy bất ngờ, xúc động, trải nghiệm cá nhân hóa
* Không ai ngoài người nhận có thể mở thư

### AI Product Criteria

* Hỗ trợ prefers-reduced-motion cho hiệu ứng mở thư
* Animation chibi cuối trang hoạt động ổn định trên mobile

### Example Success Criteria

* Khi nhập đúng “Trương Hạ Kiều Vi”, phong thư mở ra, thư kéo ra từ từ, cuối trang có hoạt hình chibi nam tiến lại gần chibi nữ đứng ở góc trái.
* Khi nhập sai, hiện thông báo “Bạn không phải là người ấy”.

### Success Criteria Quality Bar

* Đo lường được, có anti-signal rõ ràng
* Đáp ứng đúng trải nghiệm cảm xúc và cá nhân hóa

### Agent Prompt: Generate Success Criteria

Đảm bảo mọi hiệu ứng, xác thực và animation đều hoạt động ổn định, đúng mục đích.

## The Evaluation

### Required Evaluation Summary

* Đánh giá dựa trên trải nghiệm thực tế của người nhận (qualitative feedback)
* Kiểm tra kỹ các hiệu ứng động, xác thực tên, hiển thị ảnh và animation cuối trang trên nhiều thiết bị di động

### Measurement Plan

* Test nhập đúng/sai tên, kiểm tra thông báo và hiệu ứng
* Kiểm tra prefers-reduced-motion trên thiết bị hỗ trợ
* Đảm bảo ảnh thư hiển thị đúng, không lỗi
* Đánh giá animation chibi cuối trang

### Kill / Scale / Graduate Thresholds

* Kill: Nếu hiệu ứng động gây khó chịu, không hỗ trợ prefers-reduced-motion, hoặc animation lỗi trên mobile
* Scale: Nếu người nhận phản hồi tích cực, trải nghiệm mượt mà, animation hoạt động tốt
* Graduate: Khi sản phẩm đáp ứng đầy đủ tiêu chí và nhận được phản hồi cảm xúc tích cực

### AI Evaluation Plan

* Kiểm tra logic xác thực tên, hiệu ứng động, animation bằng automated test (nếu có)

### Example Decision Thresholds

* Nếu trên 90% thiết bị mobile test thành công, animation hoạt động ổn định, phản hồi người nhận tích cực → Đạt

### Evaluation Quality Bar

* Đo lường được, có tiêu chí rõ ràng, quyết định dựa trên trải nghiệm thực tế

### Agent Prompt: Design The Evaluation

Đảm bảo kiểm thử trên nhiều thiết bị, kiểm tra accessibility và animation.

## Build-Readiness Review

### Checklist

* [x] Đặc tả rõ ràng các hiệu ứng động, xác thực tên, animation cuối trang



* [x] Định nghĩa rõ logic nhập tên, thông báo lỗi



* [x] Yêu cầu mobile-first, hỗ trợ prefers-reduced-motion



* [x] Ảnh thư hard-code vào mã nguồn



* [x] Màu nền chủ đạo xanh biển, thiết kế hiện đại



* [x] Animation chibi cuối trang



* [x] Kiểm thử trên nhiều thiết bị di động



* [x] Đánh giá accessibility




### Agent Prompt: Spec Readiness Critique

Spec đã đủ chi tiết để chuyển cho đội phát triển hoặc AI coding agent. Cần kiểm thử thực tế để đảm bảo trải nghiệm cảm xúc và accessibility.

## Implementation Handoff for PM + AI Engineer

### Product Tasks

* Thiết kế UI mobile-first, nền xanh biển, bố cục phong thư
* Tạo logic nhập tên, xác thực đúng “Trương Hạ Kiều Vi”
* Hiển thị thông báo “Bạn không phải là người ấy” khi nhập sai
* Hiển thị ảnh thư (hard-code)
* Tạo hiệu ứng mở thư từ từ (không cuộn trang)
* Hỗ trợ prefers-reduced-motion
* Thêm animation chibi cuối trang: chibi nam tiến lại gần chibi nữ đứng yên góc trái

### AI Engineering Tasks

* Kiểm thử logic xác thực tên, hiệu ứng động, animation trên nhiều thiết bị
* Đảm bảo accessibility và hỗ trợ prefers-reduced-motion

## Compact One-Page Version

### Problem

Tạo trải nghiệm tỏ tình cá nhân hóa, cảm xúc qua web mô phỏng mở thư tay, chỉ mở khi nhập đúng tên người nhận.

### Bet

Nếu xây dựng web với hiệu ứng động, xác thực tên và animation chibi, người nhận sẽ cảm thấy xúc động, trải nghiệm đáng nhớ.

### Success Criteria

* Nhập đúng tên mới mở được thư
* Hiệu ứng động mượt mà, hỗ trợ prefers-reduced-motion
* Ảnh thư hiển thị đúng
* Animation chibi cuối trang hoạt động tốt

### Evaluation

* Đánh giá qua phản hồi người nhận, kiểm thử trên nhiều thiết bị, kiểm tra accessibility và animation.