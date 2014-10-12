var mainQuestions = [{
  question: "Trong một bữa tiệc, người ta thường tìm thấy bạn ở đâu?",
  options:[{text:"Giữa những người bạn mới và đang trò chuyện với mọi người", image:"", groupIndex:0},
          {text:"Trên sân khấu và bạn là người dẫn chương trình của bữa tiệc", image:"", groupIndex:1},
          {text:"Ngồi chuyện trò với những người bạn đã quen từ trước", image:"", groupIndex:2},
          {text:"Đứng một mình và tập trung quan sát những gì xung quanh cho đến khi có người đến bắt chuyện với bạn", image:"", groupIndex:3}]
},{
  question: "Khi bắt đầu công việc ở môi trường mới, bạn thường:",
  options:[{text:"Chủ động làm quen với đồng nghiệp mới", image:"", groupIndex:0},
          {text:"Tập trung hoàn thành tốt công việc của mình", image:"", groupIndex:1},
          {text:"Ngoài công việc của mình, bạn còn tìm cách giúp đỡ những đồng nghiệp khác", image:"", groupIndex:2},
          {text:"Nhanh chóng chứng tỏ năng lực làm việc với sếp và đồng nghiệp", image:"", groupIndex:3}]
},{
  question: "Khi có một người lạ chủ động bắt chuyện với bạn, bạn thường:",
  options:[{text:"Vui vẻ đáp chuyện vì nghĩ rằng mình vừa có thêm một người bạn mới", image:"", groupIndex:0},
          {text:"Tự tin đáp chuyện và chủ động dẫn dắt câu chuyện theo ý muốn của mình", image:"", groupIndex:1},
          {text:"Lịch sự đáp lại nhưng trong lòng băn khoăn không biết vì sao người đó lại bắt chuyện với mình", image:"", groupIndex:2},
          {text:"Không dễ dàng bắt chuyện với bạn khi mới gặp lần đầu", image:"", groupIndex:3}]
}];

var groups = [{
  id:1,
  text:"Bạn là người tràn đầy năng lượng, lúc nào cũng vui vẻ, lạc quan về cuộc sống của mình. Bạn biết rõ và tự tin với khả năng của bản thân nhưng không vì thế mà kiêu ngạo, với mọi người xung quanh, bạn luôn gần gũi, hòa đồng và thường là người mang lại tếng cười ở những nơi bạn xuất hiện.",
  image: "",
  lipstick:"C511, C501",
  subQuetsions:[{
    question: "Một ngày mới của bạn thường bắt đầu bằng",
    options:[{text:"Một tách cà phê", image:"cafe.jpg"},
            {text:"Một bản nhạc rộn ràng", image:"music.jpg"},
            {text:"Một ly nước cam", image:"orange-juice.jpg"}]
  },{
    question: "Bạn thường thấy thoải mái nhất với loại trang phục nào sau đây?",
    options:[{text:"Quần jean, áo thun", image:"jeans.jpg"},
            {text:"Váy ngắn", image:"skirt.jpg"},
            {text:"Quần short", image:"short.jpg"}]
  },{
    question: "Hoạt động cuối tuần yêu thích của bạn là gì",
    options:[{text:"Tụ tập bạn bè đi cafe", image:""},
            {text:"Cùng gia đình/người thân nấu những món ăn ngon", image:""},
            {text:"Tận hưởng ngày nghỉ để ngủ nướng thỏa thích", image:""}]
  }]
},{
  id:2,
  text:"Bạn là người thích làm chủ tình huống và luôn chủ động trong cuộc sống cũng như công việc của mình. Bạn khéo léo, tự tin. Nét duyên của bạn không chỉ nằm ở sự tinh tế trong giao tiếp mà còn ở chính vẻ bề ngoài và phong cách duyên dáng của bạn.",
  image: "",
  lipstick:"PR 512, Pr511",
  subQuetsions:[{
    question: "Khi sếp không hài lòng về kết quả công việc của bạn, bạn thường:",
    options:[{text:"Lắng nghe và tiếp nhận ý kiến của sếp", image:""},
            {text:"Giải thích nguyên nhân và trao đồi với sếp để tìm cách cải thiện", image:""},
            {text:"Chia sẽ với đồng nghiệp để lấy thêm ý kiến từ mọi người", image:""}]
  },{
    question: "Loại nữ trang nào sau đây bạn thường xuyên sử dụng khi đi làm:",
    options:[{text:"Hoa tai", image:"earrings.jpg"},
            {text:"Dây đeo cổ", image:"necklace.jpg"},
            {text:"Nhẫn", image:"ring.jpeg"}]
  },{
    question: "Mỗi khi tặng quà cho người thân trong gia đình bạn thường:",
    options:[{text:"Tự tay làm quà để tặng người đó", image:""},
            {text:"Bỏ thời gian rất lâu để mua quà và bạn sẽ tự tay gói quà", image:""},
            {text:"Dẫn người đó đi chọn món quà họ thích", image:""}]
  }]
},{
  id:3,
  text:"Bạn là người phụ nữ nhẹ nhàng, tình cảm. Bạn thích một cuộc sống êm đềm, không quá mạo hiểm. Với bạn bè, bạn luôn quan tâm, chia sẻ và và nhiệt tình giúp đỡ mỗi khi họ cần. Chính sự chân thành đó nên bạn luôn được mọi người xung quanh yêu mến.",
  image: "",
  lipstick:"P501, P502, R517, R518",
  subQuetsions:[{
    question: "Bạn thường chọn loại hoa nào cho bàn làm việc của bạn:",
    options:[{text:"Hồng", image:"rose.jpg"},
            {text:"Hoa ly", image:"lily.jpg"},
            {text:"Hoa cát tường", image:"cattuong.jpg"}]
  },{
    question: "Bạn thường diện bộ quần áo nào sau đây mỗi khi ra ngoài với bạn bè:",
    options:[{text:"Váy xòe nữ tính", image:"vayxoe.jpg"},
            {text:"Jumpsuit hoa", image:"jumpsuit.jpg"},
            {text:"Quần tây và sơ mi nhẹ nhàng", image:"quantay.jpg"}]
  },{
    question: "Khi người thân làm điều gì khiến bạn buồn, bạn thường:",
    options:[{text:"Tự an ủi mình và bỏ qua cho người đó", image:""},
            {text:"Tìm hiểu nguyên nhân để giải quyết vấn đề của hai người", image:""},
            {text:"Chia sẻ với người đó cảm giác của bạn một cách nhẹ nhàng", image:""}]
  }]
},{
  id:4,
  text:"Bạn quyến rũ, tự tin và là một người phụ nữ cá tính. Bạn luôn biết cách làm cho mình trở nên đẹp hơn trong mắt người khác và thu hút sự chú ý của mọi người ở bất cứ đâu bạn xuất hiện.",
  image: "",
  lipstick:"RW513, R519, R516, M511, RW512",
  subQuetsions:[{
    question: "Nếu một người giấu mặt gửi tặng bạn 1000 đóa hoa hồng đến nơi làm việc bạn sẽ:",
    options:[{text:"Rất tự hào trước sự ngạc nhiên của đồng nghiệp", image:""},
            {text:"Băn khoăn không biết ai là người đã tặng hoa cho mình", image:""},
            {text:"Không nói gì và không ngừng điều tra ai là người giấu mặt", image:""}]
  },{
    question: "Tủ giày của bạn bao gồm loại nào sau đây nhiều nhất",
    options:[{text:"Giày cao gót", image:"highheels.jpeg"},
            {text:"Giày bốt", image:"boots.jpg"},
            {text:"Giày dây", image:"sandal.jpg"}]
  },{
    question: "Bạn có thích thể hiện tình cảm với ông xã/người yêu trước đông người không?",
    options:[{text:"Có", image:""},
            {text:"Không", image:""}]
  }]
}];