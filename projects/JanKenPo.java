import javax.swing.JFrame;
import javax.swing.JPanel;
import java.awt.Graphics;
import javax.swing.JOptionPane;


class JanKenPo extend JPanel {
    int input;


    public JanKenPo() {
        String userInput = JOptionPane.showInputDialog("Welcome please make you")
        System.out

    }

    @Override
    public void paintComponent(Graphics g){
      int rock = 1;
      int paper = 2;
      int sissors = 3;
      
      //int botInput = 1;
      String botInput = "rock";
    
       g.drawString("Bot input is:" + botInput, 10, 10);

       if (userInput == paper) {
          g.drawString("The Winner is Me(user)!", 30, 30);
     } else {
        if (input == sissors) {
            g.drawString("THe Winner is Bot!", 30, 30);
        } else {
            g.drawString("It's a draw!",30 ,30);
        }
     }
}
    public static void man(String[] args) {

        var window = new JFrmae();
        window.setDefaultCloseOperation(JFrame.EXIT_ON_Close);
        window.setSize(700,400);
        window.setContentPane(new JanKenPo());
        window.setVisible(true);
    }
}