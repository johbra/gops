(ns gops.subs
  (:require 
   [re-frame.core :as rf]))

(rf/reg-sub
 :turn
 (fn [db _]
   (:turn db)))

(rf/reg-sub
 :prize-cards
 (fn [db _]
   (:prize-cards db)))

(rf/reg-sub
 :prize-card
 (fn [db _]
   (first (:prize-cards db))))

(rf/reg-sub
 :player-cards
 (fn [db _]
   (:player-cards db)))

(rf/reg-sub
 :player1-card
 (fn [db _]
   (first ((:player-cards db) 0))))

(rf/reg-sub
 :player2-card
 (fn [db _]
   (first ((:player-cards db) 1))))

(rf/reg-sub
 :player-scores
 (fn [db _]
   (:player-scores db)))
